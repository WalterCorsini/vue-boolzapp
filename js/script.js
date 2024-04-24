const { createApp } = Vue;

createApp({
    data() {
        return {
    DateTime: luxon.DateTime,
    newMessage: "",
    textContact: "",
    hiddenText: true,
    notify: false,
    menuHam: false,
    menuHamText: false,
    onlineMessage: "",
    noChat: false,   // false
    addChat: false,   // false
    count: 0,
    nameNewContact: "",

      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              info: false,
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              info: false,
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              info: false,
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              info: false,
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              info: false,
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              info: false,
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              info: false,
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              info: false,
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              info: false,
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              info: false,
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              info: false,
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              info: false,
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              info: false,
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              info: false,
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              info: false,
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              info: false,
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              info: false,
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              info: false,
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              info: false,
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              info: false,
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              info: false,
              status: "received",
            },
          ],
        },
      ],
      rndNumberText: 0,
      arrayText:[
        "Amala pazza inter amala",
        "siamo la curva nord Milano",
        "eeee per la gente che,aaaaama soltanto te",
        "chi non salta bianconero eh eh",
        "milanista chiaccherone, quanta fantasia che hai"]
    };
  },
  methods:{
    sendMessage: function(i){
      const now = luxon.DateTime.now();
      const dateNow = now.toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS);
      rndNumberText = Math.floor(Math.random() * this.arrayText.length);
      console.log(rndNumberText);
        if(this.newMessage !== ""){
            const message = {
                date: dateNow,
                message: this.newMessage,
                info: false,
                status: "sent",
            };
                const messageYou = {
                date: dateNow,
                message: this.arrayText[rndNumberText],
                info: false,
                status: "received",
            };
            console.log(messageYou);
            this.newMessage="";
            this.contacts[i].messages.push(message);
            this.onlineMessage = "sta scrivendo.... online";
            setTimeout(() =>{ this.contacts[i].messages.push(messageYou)
            this.onlineMessage = "online";
              setTimeout(() =>{
            this.onlineMessage = "";
              },3000);
        }, 3000); 

        };
    },
    searchContact: function(){
      this.contacts.forEach((curContact) => {
        const name = curContact.name.toLowerCase();
        if (name.includes(this.textContact.toLowerCase())){
                curContact.visible = true;
              } else {
                curContact.visible = false;
              }
            });
    },
    deleteMessage: function(curText){
        this.contacts.forEach((curContact,i) => {
            for(let j=0; j<curContact.messages.length; j++){
              if(curContact.messages[j] === curText){
                curContact.messages.splice(j,1);
              }
              if(curContact.messages.length !== 0){
              curContact.messages.info=false;
              }
            }
        });
    },
    deleteAllMessage: function(){
      this.contacts[this.count].messages.splice(0,this.contacts[this.count].messages.length);
      this.menuHam = false;
      this.noChat = true;
      },
    deleteChat: function(){
      console.log(this.count)
      if(this.contacts.length > 1 && this.count !== this.contacts.length-1){
      this.contacts.splice(this.count,1);
      this.menuHam = false;
      } else if(this.contacts.length > 1 && this.contacts.length-1 === this.count ) {
        this.contacts.splice(this.count,1);
        this.count--;
      } else{
          this.contacts = [
            {
              name: "",
              visible: false,  
              messages: [],
            },
          ];
      }
    },
    createChat: function(){
      copy = this.nameNewContact;
      console.log(copy);
      this.contacts.push(
        {
          name: copy,
          avatar: "_1",
          visible:true,
          messages: [],
        }),

        this.noChat = false;
        if(this.contacts[0].name === ""){
          this.contacts.splice(0,1);
        }

        this.noChat = true;
    }
   }

}).mount("#app");
