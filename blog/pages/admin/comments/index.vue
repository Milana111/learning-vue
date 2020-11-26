<template>
<client-only>
    <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
        <tbody slot="tbody">
            <tr v-for="comment in comments" :key="comment.id">
                <td> <span> {{ comment.name }} </span> </td>
                <td> <span> {{ comment.text }} </span> </td>
                <td> 
                    <span v-if="comment.publish" class="status true"> Published </span> 
                    <span v-else class="status false"> Denied </span> 
                </td>
                <td> <span @click="changeComment(comment)" class="link"> Change comment </span> </td>
                <td> <span @click="deleteComment(comment.id)" class="link"> Delete comment </span> </td>
            </tr>
        </tbody>
    </commentTable>
</client-only>
</template>

<script>
import axios from 'axios'
import commentTable from '@/components/Admin/CommentTable.vue'

export default {
    components: { commentTable },
    layout: 'admin',
    data () {
        return {
            comments: [] 
        }
    },
    mounted () {
        this.loadComments ()
    },
    methods: {
        loadComments () {
        axios.get('https://blog-nuxt-57867.firebaseio.com/comments.json')
            .then((res) => {
                let commentsArray = []
                Object.keys(res.data).forEach(key => {
                    const comment = res.data[key]
                    commentsArray.push({...comment, id: key})
                })
                this.comments = commentsArray
               // console.log(commentsArray)
            })
    },
        changeComment (comment) {
            comment.publish = !comment.publish
            
            // console.log (`Change comment id - ${id}`)
             axios.put(`https://blog-nuxt-57867.firebaseio.com/comments/${comment.id}.json`, comment)
    },
        deleteComment (id) {
            axios
             .delete(`https://blog-nuxt-57867.firebaseio.com/comments/${id}.json`)
             .then((res) => {this.loadComments()})
    },
    
}
}
</script>