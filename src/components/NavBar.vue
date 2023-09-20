<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div class="container-fluid">
            <div class="ml-5">
                <a class="navbar-brand" href="#">Message Board</a>
            </div>
            <div class="collapse navbar-collapse col-3" id="navbarSupportedContent">
                <div class="d-flex">
                    <input @click.prevent="searchMessage" class="form-control me-2" placeholder="Search" aria-label="Search" readonly>
                    <button @click.prevent="insertMessage" class="btn btn-outline-success" type="submit">Tambah Pesan</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name : 'Navbar',
    props: {
        insertMessage: Function,
        searchMessage: Function,
    }
}
</script>