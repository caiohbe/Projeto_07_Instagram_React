const storiesUsers = [
    { user: '9gag', img: 'assets/img/9gag.svg' },
    { user: 'meowed', img: 'assets/img/meowed.svg' },
    { user: 'barked', img: 'assets/img/barked.svg' },
    { user: 'nathanwpylestrangeplanet', img: 'assets/img/nathanwpylestrangeplanet.svg' },
    { user: 'wawawicomics', img: 'assets/img/wawawicomics.svg' },
    { user: 'respondeai', img: 'assets/img/respondeai.svg' },
    { user: 'filomoderna', img: 'assets/img/filomoderna.svg' },
    { user: 'memeriagourmet', img: 'assets/img/memeriagourmet.svg' },
]

const storiesUsersDiv = storiesUsers.map((u) => {
    return (
        <div class="story">
            <div class="imagem">
                <img src={u.img} />
            </div>
            <div class="usuario">
                {u.user}
            </div>
        </div>
    )
})

export default function Stories() {
    return (
        <div class="stories">
            {storiesUsersDiv}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}