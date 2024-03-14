import { defineStore } from "pinia";
import { ref } from "vue";

export const useFeedStore = defineStore("feedStore", () => {
    const items = ref(null)
    let sources = ref([
        {
            id: crypto.randomUUID(),
            name: "Mozilla Hacks",
            url: "http://hacks.mozilla.org/feed/"
        },
        {
            id: crypto.randomUUID(),
            name: "The Verge",
            url: "https://www.theverge.com/rss/index.xml"
        },
        {
            id: crypto.randomUUID(),
            name: "CSS Tricks",
            url: "https://css-tricks.com/feed/"
        },
    ])

    const current = {
        source: null,
        posts: null,
    }
    
    async function loadSource(source) {
        console.log(source)

        const response = await fetch(source.url)
        let text = await response.text()
        text = text.replace(/content:encoded/g, "content")

        const parser = new DOMParser()
        let doc = parser.parseFromString(text, "text/xml")

        const posts = []
        doc.querySelectorAll("item, entry").forEach(item => {
            let post = {
                title: item.querySelector("title")?.textContent ?? "No title",
                content: item.querySelector("content")?.textContent ?? "No content",
                pubdate: item.querySelector("pubdate")?.textContent ?? "No date",
                link: item.querySelector("link")?.textContent ?? "No link",
            }
            posts.push(post)
        })

        this.current.source = source
        this.current.posts = [...posts]
    }

    async function registerNewSource(url) {
        console.log(url)
        try {
            const response = await fetch(url)
            let text = await response.text()
            const parser = new DOMParser()
            let doc = parser.parseFromString(text, "text/xml")

            const title = doc.querySelector("channel title, feed title")?.textContent
            this.sources.push({ id: crypto.randomUUID(), name: title, url })
        } catch (error) {
            console.error(error)
            return
        }
    }

    return { current, items, sources, loadSource, registerNewSource }
});