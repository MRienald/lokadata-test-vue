<template>
    <div>
        <Navbar 
        :insertMessage = "showPopUpInsert"
        :searchMessage = "showPopUpSearch"
        />
        <div class="row justify-content-md-center mx-5">
        <div class="col col-lg-3" v-for="(item, index) in messageResponse.data" :key="index">
            <div class="container" @click="selectMessageItem(item, index)">
            <CardView
                :title="item.title"
                :name="item.user.name"
                :email="item.user.email"
                mediaHref="placeholder.svg"
                :supportingText="item.message"
                :updateData="showPopUpUpdate"
                :deleteData="showPopUpDelete"
                :onclick="showPopUpViewMessage"
            />
            </div>
        </div>
        </div>
        <formDialog
            title="Update Data"
            v-model:oldData="tempData"
        />
        <InsertDialog
            title="Tambahkan Pesan"
        />
        <DeleteDialog
            title="Delete Data"
            content="Apakah anda yakin ingin menghapus pesan ini!"
            @delete="deleteMessage"
        />
        <searchDialog
          title="Search Data"
          v-model:messageData= "tempData"
          :viewDialog = "showPopUpViewMessage"
        />
        <viewFullMessageDialog
          title="Lihat Pesan"
          :messageData = tempData
        />
    </div>
  </template>
  
  <script>
  import CardView from "../../components/CardMessage.vue";
  import Navbar from "../../components/NavBar.vue";
  import formDialog from "../../components/dialog/formDialog.vue";
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import DeleteDialog from "../../components/dialog/deleteDialog.vue";
  import InsertDialog from "../../components/dialog/insertDialog.vue";
  import searchDialog from "../../components/dialog/searchDialog.vue";
  import viewFullMessageDialog from "../../components/dialog/viewFullMessage.vue";
  
  export default {
    setup() {
      const messageResponse = ref([]);
      let formModal;
      let deleteModal;
      let insertModal;
      let searchModal;
      let viewMessageModal;
      const tempData = ref({});
      const tempIndex = ref(0);
  
      onMounted(() => {
        axios
          .get("http://127.0.0.1:8000/api/message")
          .then((result) => {
            messageResponse.value = result.data;
          })
          .catch((e) => {
            console.log(e.response);
          });
  
        formModal = new bootstrap.Modal(document.getElementById("formModal"));
        deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
        insertModal = new bootstrap.Modal(document.getElementById("insertModal"));
        searchModal = new bootstrap.Modal(document.getElementById("searchModal"));
        viewMessageModal = new bootstrap.Modal(document.getElementById("viewMessageModal"));
      });
  
      function deleteMessage() {
        if (tempData.value.message_id) {
          axios.delete(`http://127.0.0.1:8000/api/message/${tempData.value.message_id}`)
            .then(() => {
              messageResponse.value.data.splice(tempIndex.value, 1);
              deleteModal.hide();
            })
            .catch((e) => {
              console.log(e.response);
            });
        }
      }
  
      const showPopUpUpdate = () => {
        formModal.show();
      };
  
      const showPopUpDelete = () => {
        deleteModal.show();
      };

      const showPopUpInsert = () => {
        insertModal.show();
      };

      const showPopUpSearch = () => {
        searchModal.show();
      };

      const showPopUpViewMessage = () => {
        viewMessageModal.show();
      };
  
      function selectMessageItem(params, index) {
        tempData.value = params;
        tempIndex.value = index;
      }
  
      return {
        messageResponse,
        tempData,
        tempIndex,
        selectMessageItem,
        showPopUpUpdate,
        showPopUpDelete,
        showPopUpInsert,
        showPopUpSearch,
        showPopUpViewMessage,
        deleteMessage,
      };
    },
    name: "index",
    components: {
      CardView,
      Navbar,
      formDialog,
      DeleteDialog,
      InsertDialog,
      searchDialog,
      viewFullMessageDialog,
    },
  };
  </script>
  