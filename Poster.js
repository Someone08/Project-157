AFRAME.registerComponent("posters", {
    init: function() {
        this.placesContainer = this.el;
        this.createPosters();
    },
    createCards: function () {
        const thumbNailsRef = [
        {
            id: "superman",
            title: "Superman",
            url: "./assets/Superman.jpg",
        },
        {
            id: "spiderman",
            title: "Spiderman",
            url: "./assets/Spiderman.jpg",
        },

        {
            id: "captian-aero",
            title: "Captian Aero",
            url: "./assets/Captian-Aero.webp",
        },
        {
            id: "outer-space",
            title: "Outer Space",
            url: "./assets/Outer-Space.webp",
        },
        ];
    
        let prevoiusXPosition = 0;

        for (var item of thumbNailsRef) {
            const posX = prevoiusXPosition + 25;
            const posY = 5;
            const posZ = 0.1;
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;

            const borderEl = this.createBorder(position, item.id);

            const thumbNail = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);

            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);

            this.placesContainer.appendChild(borderEl);
        }
    },
    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            color: "#fff",
            opacity: 1,
        });

        return entityEl;
    },
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 24,
            height: 30
        });
        entityEl.setAttribute("material", { src: item.url });

        return entityEl;
    },
    createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 70,
            color: "#e65100",
            value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
});