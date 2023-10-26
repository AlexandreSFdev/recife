function carregar() {
    let titulo = document.querySelector("h1");
    let msg = document.getElementById("msg");
    let data = new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
    let hora = new Date(data).getHours();
    console.log(hora);
    
    if (hora >= 0 && hora < 12) {
        msg.innerText += 'Essa é a melhor hora para fotografar os prédios antigos do Recife Antigo e comer uma tapioca.'
        titulo.innerText = "Bom dia Recife!";
        document.body.style.background = "#FEFFAC" 
      } else if (hora >= 12 && hora < 18) {
        msg.innerText += 'Essa é a Hora de comer um peixe no Restaurante Casa de Banho.'
        titulo.innerText = "Boa tarde Recife!";
        document.body.style.background = "#D7E5CA" 
    
      } else {
        msg.innerText += 'Essa é a Hora de tomar uma cervejinha nos bares do Cais da Alfandega.'
        titulo.innerText = "Boa noite Recife!";
        document.body.style.background = "#D2E0FB" 
      }
    }

    carregar();


