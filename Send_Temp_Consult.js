function Confirmada(email,assunto,mensagem) {
    var email = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('C2').getValue(); //email de destino
    var assunto = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('A1').getValue(); //assunto do email
    var cabe = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('v4').getValue(); //conteudo da mensagem
    var bloco1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('W5').getValue(); //conteudo da mensagem
    var bloco2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('W6').getValue(); //conteudo da mensagem
    var bloco3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('W7').getValue(); //conteudo da mensagem
    var bloco4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('W8').getValue(); //conteudo da mensagem
    var libera = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('B1').getValue(); //verificador se o email deve ser enviado
    var data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('B3').setValue(new Date()).setNumberFormat("dd/mm/yyyy HH:mm:ss");
    var mensagem =cabe + bloco1 + bloco2 + bloco3 + bloco4;
    var cc = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('D2').getValue(); //assunto do email
    var file = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('E1').getValue();
    
    if(libera == "S"){ 
     
    MailApp.sendEmail({
      to: email,//pega os dados da variável e-mail
      subject: assunto,//pega os dados da variável assunto
      cc: cc,
      htmlBody:'Olá,Tudo bem?<br />Informamos que a sua agenda no drive contendo a programação das atividades previstas, teve ALTERAÇÃO/INCLUSÃO de turmas na programação.<br />Gentileza verificar e confirmar o recebimento.</tr>' + mensagem +'</tr><br />Agenda do consultor: </tr><br />' + file + '</tr><br /><br />Qualquer dúvida estamos à disposição.<br />Obrigado.',
      name: "Keveen Menezes", //nome do remetente de envio do e-mail
      }
                     
      )
  }
  }
  function Cancelada(email,assunto,mensagem) {
    var email = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('C2').getValue(); //email de destino
    var assunto = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('C1').getValue(); //assunto do email
    var cabe = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('X4').getValue(); //conteudo da mensagem
    var bloco1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('Y5').getValue(); //conteudo da mensagem
    var bloco2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('Y6').getValue(); //conteudo da mensagem
    var bloco3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('Y7').getValue(); //conteudo da mensagem
    var bloco4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('Y8').getValue(); //conteudo da mensagem
    var libera = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('D1').getValue(); //verificador se o email deve ser enviado
    var data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('B3').setValue(new Date()).setNumberFormat("dd/mm/yyyy HH:mm:ss");
    var mensagem =cabe + bloco1 + bloco2 + bloco3 + bloco4; 
    var cc = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('D2').getValue(); //assunto do email
    var file = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AGENDA').getRange('E1').getValue();
    
    if(libera == "S"){ 
     
    MailApp.sendEmail({
      to: email,//pega os dados da variável e-mail
      subject: assunto,//pega os dados da variável assunto
      cc: cc,
         htmlBody:'Olá,Tudo bem?<br />Informamos que a sua agenda no drive contendo a programação das atividades previstas, houve o CANCELAMENTO de turmas na programação.<br />Gentileza verificar e confirmar o recebimento.</tr>' + mensagem +'</tr><br />Agenda do consultor:</tr><br />' + file + '</tr><br /><br />Qualquer dúvida estamos à disposição.<br />Obrigado.',
      name: "Keveen Menezes", //nome do remetente de envio do e-mail
      }
                     
      )
  }
  }