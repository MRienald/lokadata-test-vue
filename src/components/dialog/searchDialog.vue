<template>
<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
      </div>
      <div class="modal-body">
        <input @input="searchData" type="text" class="form-control icon" placeholder="Search..." v-model="responseSearch.q">
        <div class="list-group">
            <div class="list-group-item list-group-item-action py-3 mt-3" v-for="(item, index) in searchResult.data" :key="item.message_id">
              <div class="container" @click="clickMessage(item, index)" data-bs-dismiss="modal">
                <h5 class="card-subtitle text-muted">{{ item.title }}</h5>
                <p class="card-subtitle mb-2 text-muted fs-6">{{ item.user.name }} | ({{ item.user.email }})</p>
                <p class="card-text fs-5">
                    {{ item.message }}
                </p>
              </div>
            </div>
            <div v-if="validations.status != null || validations.status != []" class="item error" style="text-align: center;">
                <p>-- No results found --</p>
            </div>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from "axios";
  import { onMounted, ref, reactive } from "vue";
  export default {
    name: 'SearchDialog',
    props: {
      title: String,
      messageData: Object,
      viewDialog: Function,
    },
    setup (props){
        let searchResult = ref([]);
        let validations = ref({})
        let responseSearch = reactive({
            q : '',
        });
        const searchData = ()=> {
            axios.get(`http://127.0.0.1:8000/api/message/search/keyword?q=${responseSearch.q}`).then((result) => {
                searchResult.value = result.data;
                validations.value = {};
            }).catch((e) => {
                searchResult.value = [];
                validations.value = e.response.data;
                console.log(e.response.data);
            });
        }

        function clickMessage(params, index) {
          props.messageData.message_id = params.message_id;
          props.messageData.user = params.user;
          props.messageData.title = params.title;
          props.messageData.message = params.message;
          props.messageData.created_at = params.created_at;
          props.messageData.updated_at = params.updated_at;
          props.viewDialog();
        }

        return {
            searchResult,
            responseSearch,
            validations,
            searchData,
            clickMessage,
        }
    },
  };
</script>

<style>
.icon {
  padding-left: 30px;
  margin-bottom: 30px;
  background: url("https://static.thenounproject.com/png/101791-200.png") no-repeat left;
  background-size: 25px;
}

.list-group-item .card-text {
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>