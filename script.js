const socket = io( "wss://localhost/", { transports: ["websocket"]} );
io.on( "connection", ( socket ) => {
    console.log( socket );
})

function FontChange() {
    let e = {
        font: {
            size: document.getElementById("FontSize").value,
            weight: document.getElementById("FontWeight").value
        },
        fonts: document.getElementById("Fonts")
    }
    e.fonts.style.fontSize = e.font.size + "em";
    e.fonts.style.fontWeight = e.font.weight;
}