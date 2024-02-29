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


// Definindo os setores para cada departamento
const setoresPorDepartamento = {
    'depto1': ['Secretaria de saúde', 'Centro de saúde', 'Farmácia central', 'Almoxarifado da saúde', 'PSF 1', 'PSF 2', 'PSF 3', 'PSF 4', 'PSF 5', 'Saúde mental', 'Vigilância epidemiológica', 'Vigilância sanitária'],
    'depto2': ['Conselho tutelar', 'Cozinha piloto', 'Secretaria de educação', 'Centro cultural', 'Creche Ana Beatriz', 'EMEF Miguel Bueno', 'Creche Tutti Mama', 'EMEIEF Maria Eulália', 'EMEIEF Zezé Leão', 'EMEI Paulo Moreira', 'EMEI Prof Clóvis Barbosa', 'EMEIEF Horácio da Silva Leite', 'EMEIEF Elizabete', 'Creche Ilse Franco', 'Creche Cléa Razaboni', 'NEEP'],
    'depto3': ['Agricultura', 'Centro de triagem animal'],
    'depto4': ['Secretaria social', 'Cras', 'Creas', 'CCI - Ilse Ferraz', 'CCI - Paraná'],
    'depto5': ['Esporte, turismo, lazer e juventude'],
    'depto6': ['Financeiro', 'Compras', 'Engenharia', 'Recursos humanos', 'Área de T.I', 'Licitação', 'Serviços Jurídicos', 'Tributação e cadastro'],
    'depto7': ['Almoxarifado do patrimônio', 'Oficina', 'Obras', 'Frotas', 'Garagem'],
    'depto8': ['Sebrae aqui', 'PAE', 'Administração', 'Banco do povo', 'Central de empregos', 'Procon'],
    // Adicione mais departamentos e seus setores conforme necessário
};

// Função para preencher o dropdown de setor baseado no departamento selecionado
function popularSetores() {
    const departamentoSelecionado = document.getElementById('departamento').value;
    const setores = setoresPorDepartamento[departamentoSelecionado];
    const selectSetor = document.getElementById('setor');
    selectSetor.innerHTML = '';
    setores.forEach(setor => {
        const option = document.createElement('option');
        option.text = setor;
        selectSetor.add(option);
    });
}

// Evento para popular os setores quando o departamento for alterado
document.getElementById('departamento').addEventListener('change', popularEstoque);


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
