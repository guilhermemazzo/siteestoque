// Get the cadastrar button
var cadastrarBtn = document.getElementById("cadastrarBtn");

// Add click event listener to the cadastrar button
cadastrarBtn.addEventListener("click", function () {
  // Get the selected department value
  var departamentoSelect = document.getElementById("departamentoSelect");
  // Get the setor input value
  var setorInput = document.getElementById("setorInputb");

  var errorMsg = document.getElementById("errorMsg");

  // Validate if both fields are filled
  if (departamentoSelect.value != "" && setorInput.value != "") {
    errorMsg.style.display = "none";
    alert("Setor cadastrado com sucesso!");
    $("#cadastroModal").modal("toggle")
    setorInput.value = "";
  } else {
    errorMsg.style.display = "block";
  }
});

function delAlert() {
  Swal.fire({
    title: "Tem certeza que deseja excluir isso?",
    text: "O processo não poderá ser revertido!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sim, tenho certeza!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Excluido!",
        text: "Seu item foi excluído com sucesso.",
        icon: "success"
      });
    }
  });
}

function verificarCampos() {
  // Obter os valores dos campos
  var tipo = document.getElementById('tipo').value;
  var marca = document.getElementById('marca').value;
  var descricao = document.getElementById('descricao').value;
  var setor = document.getElementById('setor').value;

  // Verificar se os campos estão vazios
  if (tipo.trim() === '' || marca.trim() === '' || descricao.trim() === '' || setor.trim() === '') {
    Swal.fire({
      title: "Tem certeza que deseja excluir isso?",
      text: "O processo não poderá ser revertido!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sim, tenho certeza!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Excluido!",
          text: "Seu item foi excluído com sucesso.",
          icon: "success"
        });
      }
    });
    $("#edicaoModal").modal("toggle")
  } else {
    // Se todos os campos estiverem preenchidos, exibir um alerta de sucesso
    alert('Cadastro realizado com sucesso!');
  }
}



// Evento para abrir o modal de cadastro de departamento
document.getElementById('cadastroEstoqueModal').addEventListener('show.bs.modal', function (event) {
    // Aqui você pode adicionar o código para abrir o modal de cadastro de departamento
    alert('Abrir modal de cadastro de departamento');
});

// Evento para abrir o modal de cadastro de setor
document.getElementById('cadastroSetorModal').addEventListener('show.bs.modal', function (event) {
    // Aqui você pode adicionar o código para abrir o modal de cadastro de setor
    alert('Abrir modal de cadastro de setor');
});

function showdarModal() {
  // Oculta o modal de estoque
  $('#estoqueModal').modal('hide');
  // Mostra o modal de edição
  $('#darModal').modal('show');
}
function showemprestimoModal() {
  // Oculta o modal de estoque
  $('#estoqueModal').modal('hide');
  // Mostra o modal de edição
  $('#emprestimoModal').modal('show');
}


function shownovoModal() {
  // Oculta o modal de estoque
  $('#cadastroItemEstoque').modal('hide');
  // Mostra o modal de edição
  $('#novoModal').modal('open');
}

function showusadoModal() {
  // Oculta o modal de estoque
  $('#cadastroItemEstoque').modal('hide');
  // Mostra o modal de edição
  $('#usadoModal').modal('open');
}

