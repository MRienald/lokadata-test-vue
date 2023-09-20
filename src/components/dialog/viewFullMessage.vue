<template>
    <div class="modal fade" id="viewMessageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content px-3">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
        </div>
        <div class="modal-body">
            <h4 class="card-title">{{ messageData.title }}</h4>
            <h6 class="card-subtitle text-muted">Sender : {{ messageData.user?.name }}</h6>
            <a :href="'mailto:' + messageData.user?.email" class="card-subtitle text-muted">{{ "<" + messageData.user?.email + ">" }}</a>
            <p class="card-text fs-2 my-3">{{messageData.message}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kembali</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ViewFullMessageDialog',
    props: {
        title: String,
        messageData: Object,
    },
};
</script>