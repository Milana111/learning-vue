<template>
    <div class="notes">
        <div class="note" :class="[{ full: !grid }, note.priority.toLowerCase().replace(/\s/g,'') ]" v-for="(note, index) in notes" :key="index">
            <div class="note-header" :class="[{ full: !grid }, note.priority.toLowerCase().replace(/\s/g,'') ]">
                <div class="title-input-change"><p>{{ note.title }}</p><input v-model="note.title" :class="[note.priority.toLowerCase().replace(/\s/g,'')]" class="title-changer" type="text"></div>
                <p style="cursor: pointer;" @click="removeNote(index)">x</p>
            </div>

            <div class="note-description">
                <p>{{ note.description }}</p>
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true,
        },
        grid: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        removeNote(index) {
            console.log(`Note ${index} has been removed`);
            this.$emit('remove', index)
        }
    }
}
</script>
<style lang="scss">
.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}
.note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    border-radius: 14px;
    background-color: white;
    transition: all .25s cubic-bezier(.02, .01,.47,1);
    box-shadow: 0 0px 30px rgba(0,0,0,0.02);
    &:hover {
        box-shadow: 0 0px 30px rgba(0,0,0,0.04);
        transform: translate(0, -3px);
        transition-delay: 0.2s !important;
        transition: ease 0.2s;
    }
    &.full {
        width: 100%;
    }
    &.high {
        box-shadow: 0 0px 30px rgba(240, 189, 23, 0.07);
    }
    &.veryhigh {
        box-shadow: 0 0px 30px rgba(224,64,64, 0.07);
    }
}
.note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-size: 32px;
    }
    p {
        font-size: 22px;
        color: #3f5bb8;
        &.stateChanger1 {
            opacity: 0;
        }
    }
    &.high p{
        color: rgba(240, 189, 23, 1);
    }
    &.veryhigh p {
        color: #e04040;
    }
    svg {
        margin-right: 12px;
        color: #999;
        &.active {
            color: #3f5bb8;
        }
        &:last-child {
            margin-right: 0px;
        }
    }
}
.title-changer {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
    opacity: 0;
    font-size: 22px;
    font-family: 'Montserrat';
    color: #3f5bb8;
    &.high {
        color: rgba(240, 189, 23, 1);;
    }
    &.veryhigh {
        color: #e04040;
    }
}
.title-changer:focus {
    opacity: 1;
}
.title-input-change {
    position: relative;
}
.note-description {
    p {
        margin: 20px 0;
    }
    span {
        font-size: 14px;
        color: #999;
    }
}
</style>