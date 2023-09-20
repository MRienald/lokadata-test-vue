<template>
    <div @click.prevent="onclick" class="card">
      <div class="media" :style="mediaBg" v-if="mediaHref"></div>
      <h4 class="title mt-2">{{ title }}</h4>
      <small class="secondary-text mt-1">Sender: {{ name }}</small>
      <small class="secondary-text">{{ email }}</small>
      <p class="supporting-text mt-3 fs-4">{{ supportingText }}</p>
      <div class="row justify-content-between">
        <div class="col-5">
          <a @click.prevent="updateData" class="material-button" style="text-decoration:none;">Update</a>
        </div>
        <div class="col-5">
          <a @click.prevent="deleteData" class="material-button" style="text-decoration:none;">Delete</a>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
    name: 'CardMessage',
    props: {
        title: String,
        name: String,
        email: String,
        mediaHref: String,
        supportingText: String,
        updateData: Function,
        deleteData: Function,
        onclick: Function,
    },
    computed: {
        mediaBg() {
            return {
            backgroundImage: `url(${this.mediaHref})`
            }
        }
    }
}
</script>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
    .card {
        background-color: #fff;
        border-radius: .2rem;
        box-shadow: rgb(150, 150, 150) 0px 1px 3px;
        width: 300px;
        padding: .8rem;
        font-family: 'Quicksand', sans-serif;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .media {
    height: 150px;
    }

    .title {
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    max-width: 100%;
    }

    .supporting-text {
        max-height: 3.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .material-button {
    color: rgb(76, 6, 141);
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    padding: .5rem;
    font-weight: bold;

    transition: .3s all linear;
    }

    .material-button:hover {
    background-color: rgba(106, 20, 185, 0.082);
    }
</style>