<template>
    <div class="modal fade" id="insertModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent="saveChanges()">
            <div class="modal-body">
              <div v-if="validations.status != null" class="alert alert-danger" role="alert">
                Periksa kembali Form anda!
              </div>
              <div class="mb-3">
                <label for="formTitle" class="form-label">Nama</label>
                <input @input="removeValidation" type="text" class="form-control" v-model="responseMessage.name">
                <div v-if="validations.status != null" class="text-danger mx-1" style="font-size: 13px;">
                  {{ validations.message.name ? validations.message.name[0] : '' }}
                </div>
              </div>
              <div class="mb-3">
                <label for="formTitle" class="form-label">Email</label>
                <input type="text" class="form-control" v-model="responseMessage.email">
                <div v-if="validations.status != null" class="text-danger mx-1" style="font-size: 13px;">
                  {{ validations.message.email ? validations.message.email[0] : '' }}
                </div>
              </div>
              <div class="mb-3">
                <label for="formTitle" class="form-label">Title</label>
                <input type="text" class="form-control" v-model="responseMessage.title">
                <div v-if="validations.status != null" class="text-danger mx-1" style="font-size: 13px;">
                  {{ validations.message.title ? validations.message.title[0] : '' }}
                </div>
              </div>
              <div class="mb-3">
                <label for="formMessage" class="form-label">Message</label>
                <textarea type="text" name="message" class="form-control" id="formMessage" v-model="responseMessage.message"></textarea>
                <div v-if="validations.status != null" class="text-danger mx-1" style="font-size: 13px;">
                  {{ validations.message.message ? validations.message.message[0] : '' }}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, reactive } from "vue";
  import axios from "axios";
  
  export default {
    name: 'InsertDialog',
    props: {
      title: String,
    },
    setup() {

      let responseMessage = reactive({
        name : '',
        email : '',
        title : '',
        message : '',
      });

      let validations = ref({});

      const saveChanges = () => {
        axios.post(
            `http://127.0.0.1:8000/api/message`,
            responseMessage
        ).then(()=>{
          removeValidation();
          window.location.reload();
        }).catch((e) => {
            validations.value = e.response.data;
            console.log(e.response);
        });
      };

      function removeValidation(){
        validations.value = {};
      }
  
      return {
        saveChanges,
        removeValidation,
        responseMessage,
        validations,
      };
    },
  };
  </script>
  