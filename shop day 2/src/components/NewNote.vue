<template>
    <div class="new-note">
        <div class="title-select">
            <input v-model="note.title" type="text" placeholder="Title" style="font-family: 'Montserrat';">
            <div class="select-item">
                <label>Priority:</label>
                <select v-model="note.priority" style="font-family: 'Montserrat';">
                    <option v-for="(priority, index) in priorities" v-bind:key="index">{{ priority }}</option>
                </select>
            </div>
        </div>
        <textarea v-model="note.description" placeholder="Description" style="font-family: 'Montserrat';"></textarea>
        <button class="btn btnPrimary btn-margin" style="font-family: 'Montserrat';" @click='addNote'>Create</button>
    </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Object,
            required: true,
        },
        priorities: {
            type: Array,
            required: true,
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
    .new-note {
        text-align: center;    
    }
    .btn-margin {
        margin: 20px 0;
    }
    .select-item label {
        margin: 0;
        margin-right: 10px;
    }
    .select-item select {
        padding: 16px 26px;
        border-radius: 14px;
    }
    .select-item {
        display: flex;
        align-items: center;
    }
    .title-select input {
        margin: 0;
        margin-right: 50px;
    }
    .title-select {
        display: flex;
        margin-bottom: 20px;
    }
</style>