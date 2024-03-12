<script>
export default {
    // props: ["onTagsChange"], // in case of using props
    // here we use $emit to send the tags to the parent component
    emits: ["onTagsChange"],
    // we address the tags as a local state
    // and the currentValue to handle the input value
    data() {
        return {
            currentValue: "",
            tags: [
                "manfred "
            ],
        };
    },

    methods: {
        // we handle the keydown event to add or delete tags
        handleKeyDown(event) {
            if (event.key === "Enter" && this.currentValue !== "") {
                if (!this.tagExists(this.currentValue)) {
                    this.tags.push(this.currentValue);
                }
                this.currentValue = "";
            }
            if (event.key === "Backspace" && this.currentValue === "") {
                this.tags.pop();
                // this.onTagsChange(this.tags) // in case of using props
                this.$emit("onTagsChange", this.tags);
            }
        },
        // also we handle the form submit event to add tags
        handleSubmit(event) {
            event.preventDefault();
            if (this.currentValue !== "") {
                if (!this.tagExists(this.currentValue)) {
                    this.tags.push(this.currentValue);
                    // this.onTagsChange(this.tags) // in case of using props
                    this.$emit("onTagsChange", this.tags);
                }
                this.currentValue = "";
            }
        },
        // we delete tags
        deleteTag(tag) {
            this.tags = this.tags.filter((t) => t !== tag);
            // this.onTagsChange(this.tags) // in case of using props
            this.$emit("onTagsChange", this.tags);
        },
        tagExists(tag) {
            return this.tags.includes(tag);
        },
    },
};
</script>

<template>
    <main>
        <section class="inputTag">
            <h3>Handle Keydown</h3>
            <p>If push enter adds a tag (if not exists previously), if empty and push backspace delete the last one</p>
            <input type="text" v-model="currentValue" @keydown="handleKeyDown" />
            <h3>Handle Submit Form</h3>
            <p>If push enter adds a tag (if not exists previously)</p>
            <form @submit.prevent="handleSubmit">
                <input type="text" v-model="currentValue">
            </form>
        </section>
        <section class="tags">
            <h3>Tags</h3>
            <ul>
                <!-- we loop the tags and show them -->
                <!-- attention to the :key to identify every unique element-->
                <li class="tag" v-for="(tag, index) in tags" :key="index">
                    {{ tag }}
                    <!-- we add a button to delete the tag, attention to the @click -->
                    <button @click="deleteTag(tag)">x</button>
                </li>
            </ul>
        </section>
    </main>


</template>


<style>
main {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
}

section {
    border: 2px solid #a1a1a1;
    padding: 10px;
    margin: 10px;
    border-radius: 12px;
}

li {
    list-style: none;
    display: inline-flex;
    margin: 5px;
    border: #a1a1a1 1px solid;
    padding: 8px;
    border-radius: 24px;
    background-color: #f1f1f1;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

button {
    margin-left: 5px;
    border-radius: 50%;
    border: none;
    background-color: #ff0000;
    color: #fff;
    cursor: pointer;
    padding: 5px;
    font-size: 12px;
    line-height: 12px;
    vertical-align: middle;
    text-align: center;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transition: all 0.1s;
}
</style>