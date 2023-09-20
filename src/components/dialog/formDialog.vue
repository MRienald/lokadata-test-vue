<template>
    <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent="saveChanges()">
            <div class="modal-body">
              <div class="mb-3">
                <label for="formTitle" class="form-label">Title</label>
                <input type="text" class="form-control" v-model="oldData.title">
              </div>
              <div class="mb-3">
                <label for="formMessage" class="form-label">Message</label>
                <textarea type="text" name="message" class="form-control" id="formMessage" v-model="oldData.message"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: 'FormDialog',
    props: {
      title: String,
      oldData: Object,
    },
    setup(props) {

      const saveChanges = () => {
        if (props.oldData.message_id) {
            axios.put(
                `http://127.0.0.1:8000/api/message/${props.oldData.message_id}`,
                props.oldData
            ).then(() => {

            }).catch((e) => {
                console.log(e.response);
            });
        }
      };
  
      return {
        saveChanges,
      };
    },
  };
  </script>
  