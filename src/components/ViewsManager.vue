<template>
  <div :is="currentComponent" :swap-component="swapComponent"></div>
</template>

<script>
  var View01 = { // ekran startowy
    template: `
<div class="row">
    <div class="col-12 app-div-margins">
<div class="col-12 app-div-margins" id="app-logo">SIATK<span>v</span>STAT</div>
        <button v-on:click="swapComponent('view-09')" class="btn app-button btn-block" type="submit">
            <i class="fa fa-arrow-right app-fa-menu"></i>NOWY MECZ
        </button>
        <button class="btn app-button btn-block" type="submit" v-on:click="/*swapComponent('view-02')*/" data-toggle="modal" data-target="#app-modal2">
            <i class="fa fa-user app-fa-menu"></i>LOGOWANIE
        </button>
        <button class="btn app-button btn-block" type="submit" v-on:click="/*swapComponent('view-03')*/" data-toggle="modal" data-target="#app-modal2">
            <i class="fa fa-user-plus app-fa-menu"></i>REJESTRACJA
        </button>
        <button class="btn app-button btn-block" type="submit" v-on:click="/*swapComponent('view-04')*/" data-toggle="modal" data-target="#app-modal2">
            <i class="fa fa-archive app-fa-menu"></i>ARCHIWUM
        </button>
        <!--button class="btn app-button btn-block" type="submit" v-on:click="">
            <i class="fa fa-user app-fa-menu"></i>WYLOGUJ
        </button-->
    </div>
    <div class="col-12 align-self-end app-div-margins">
        <button class="btn app-button btn-block" type="submit" data-toggle="modal" data-target="#app-modal1">
            <i class="fa fa-window-close app-fa-menu"></i>KONIEC
        </button>
    </div>
    <div class="modal fade" id="app-modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">UWAGA</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">Aby zakończyć zamknij kartę w przeglądarce</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="app-modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">UWAGA</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body"><center>Opcja niedostępna<br />Przepraszamy</center></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    props: ['swapComponent']
  }
  var View02 = { // logowanie
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><input type="text" class="form-control app-input" id="user-login" placeholder="Login"><input type="password" class="form-control app-input" id="user-password" placeholder="Hasło"><button class="btn app-button btn-block" type="submit" v-on:click=""><i class="fa fa-user app-fa-menu"></i>ZALOGUJ</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-01')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View03 = { // rejestrowanie
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><input type="text" class="form-control app-input" id="user-login" placeholder="Login"><input type="password" class="form-control app-input" id="user-password" placeholder="Hasło"><input type="password" class="form-control app-input" id="user-password2" placeholder="Powtórz hasło"><button class="btn app-button btn-block" type="submit" v-on:click=""><i class="fa fa-user-plus app-fa-menu"></i>ZAŁÓŻ KONTO</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-01')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View04 = { // archiwum
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-05')"><i class="fa fa-bar-chart app-fa-menu"></i>STATYSTYKI</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-07')"><i class="fa fa-list app-fa-menu"></i>ZMIANA SKŁADU</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-08')"><i class="fa fa-user-secret app-fa-menu"></i>ZMIANA HASŁA</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-01')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View05 = { // lista meczy
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins app-div-scrollbar2"><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-06')">14.03.2017 | Warszawa</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-06')">16.03.2017 | Zielona Góra</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-06')">24.03.2017 | Gdańsk</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-06')">02.04.2017 | Wrocław</button></div><div class="col-12 align-self-end app-div-margins app-div-underscrollbar"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-04')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View06 = { // statystyki
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins app-div-scrollbar2"><select class="custom-select app-select"><option value="0" selected>CAŁY MECZ</option><option value="1">SET 1</option><option value="2">SET 2</option><option value="3">SET 3</option><option value="4">SET 4</option><option value="5">SET 5</option></select><select class="custom-select app-select"><option value="0" selected>WSZYSCY</option><option value="1">NAJLEPSI</option><option value="2">ZAWODNIK</option></select><div style="background-color: white; padding: 2px 5px">PUNKTY:<br />...<br />...<br />...<br />ZAGRYWKA:<br />...<br />...<br />...<br />PRZYJĘCIE:<br />...<br />...<br />...<br />ATAK:<br />...<br />...<br />...<br />BLOK:<br />...<br />...<br />...<br />ROZEGRANIE:<br />...<br />...<br />...<br /></div></div><div class="col-12 align-self-end app-div-margins app-div-underscrollbar"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('previous')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View07 = { // lista zawodników
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins app-div-scrollbar"><div v-for="(id, index) in this.$parent.players"><input min="1" max="24" type="number" class="app-input-id" v-model:value="id.id"><input type="text" maxlength="20" class="app-input-name" v-model:value="id.name"></div></div><div class="col-12 align-self-end app-div-margins app-div-underscrollbar"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('previous')"><i class="fa fa-check-square app-fa-menu"></i>ZATWIERDŹ</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('previous')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent','players']
  }
  var View08 = { // zmiana hasła
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><input type="password" class="form-control app-input" id="user-password-old" placeholder="Stare hasło"><input type="password" class="form-control app-input" id="user-password" placeholder="Nowe hasło"><input type="password" class="form-control app-input" id="user-password2" placeholder="Powtórz nowe hasło"><button class="btn app-button btn-block" type="submit" v-on:click=""><i class="fa fa-check-square app-fa-menu"></i>ZATWIERDŹ</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-04')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View09 = { // ekran przedmeczowy
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-07')"><i class="fa fa-list app-fa-menu"></i>WPROWADŹ SKŁAD</button><button class="btn app-button btn-block" type="submit" v-on:click="" data-toggle="modal" data-target="#app-modal1"><i class="fa fa-cloud-download app-fa-menu"></i>WCZYTAJ SKŁAD</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-10')"><i class="fa fa-arrow-right app-fa-menu"></i>DALEJ</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-01')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div>
    <div class="modal fade" id="app-modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">UWAGA</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body"><center>Opcja niedostępna<br />Przepraszamy</center></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    `,
    props: ['swapComponent']
  }
  var View10 = { // wybór zawodników na boisku
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins app-div-scrollbar"><input type="checkbox" id="app-check-input1" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form1ID" readonly><input type="text" class="app-input-name-aftercheck" id="form1name" readonly><input type="checkbox" id="app-check-input2" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form2ID" readonly><input type="text" class="app-input-name-aftercheck" id="form2name" readonly><input type="checkbox" id="app-check-input3" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form3ID" readonly><input type="text" class="app-input-name-aftercheck" id="form3name" readonly><input type="checkbox" id="app-check-input4" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form4ID" readonly><input type="text" class="app-input-name-aftercheck" id="form4name" readonly><input type="checkbox" id="app-check-input5" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form5ID" readonly><input type="text" class="app-input-name-aftercheck" id="form5name" readonly><input type="checkbox" id="app-check-input6" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form6ID" readonly><input type="text" class="app-input-name-aftercheck" id="form6name" readonly><input type="checkbox" id="app-check-input7" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form7ID" readonly><input type="text" class="app-input-name-aftercheck" id="form7name" readonly><input type="checkbox" id="app-check-input8" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form8ID" readonly><input type="text" class="app-input-name-aftercheck" id="form8name" readonly><input type="checkbox" id="app-check-input9" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form9ID" readonly><input type="text" class="app-input-name-aftercheck" id="form9name" readonly><input type="checkbox" id="app-check-input10" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form10ID" readonly><input type="text" class="app-input-name-aftercheck" id="form10name" readonly><input type="checkbox" id="app-check-input11" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form11ID" readonly><input type="text" class="app-input-name-aftercheck" id="form11name" readonly><input type="checkbox" id="app-check-input12" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form12ID" readonly><input type="text" class="app-input-name-aftercheck" id="form12name" readonly><input type="checkbox" id="app-check-input13" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form13ID" readonly><input type="text" class="app-input-name-aftercheck" id="form13name" readonly><input type="checkbox" id="app-check-input14" class="app-input-check"><input type="text" class="app-input-id-aftercheck" id="form14ID" readonly><input type="text" class="app-input-name-aftercheck" id="form14name" readonly></div><div class="col-12 align-self-end app-div-margins app-div-underscrollbar"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-arrow-right app-fa-menu"></i>DALEJ</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('previous')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View11 = { // ekran meczowy
    template: `<div class="row"><div class="col-12 app-div-margins"><div class="align-self-start" id="app-score"><button class="btn app-score-button app-score-left text-center align-middle" type="submit" v-on:click=""><i class="fa fa-plus"></i></button><button class="btn app-score-button app-score-left text-center align-middle" type="submit" v-on:click=""><i class="fa fa-minus"></i></button><span class="score">0:0</span><button class="btn app-score-button app-score-right" type="submit" v-on:click=""><i class="fa fa-plus"></i></button><button class="btn app-score-button app-score-right" type="submit" v-on:click=""><i class="fa fa-minus"></i></button></div><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><b>Z</b>AGRYWKA</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><b>P</b>RZYJĘCIE</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-14')"><b>R</b>OZEGRANIE</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><b>A</b>TAK</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><b>B</b>LOK</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-06')"><i class="fa fa-bar-chart app-fa-menu"></i>STATYSTYKI</button><button class="btn app-button app-button-inline" type="submit" v-on:click="swapComponent('view-10')"><i class="fa fa-refresh app-fa-menu"></i>ZMIANA</button><button class="btn app-button app-button-inline pull-right" type="submit" data-toggle="modal" data-target="#app-modal1"><i class="fa fa-window-close app-fa-menu"></i>KONIEC</button></div><div class="modal fade" id="app-modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">UWAGA</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">Czy na pewno chcesz zakończyć mecz?</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">NIE</button><button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="swapComponent('view-01')">TAK</button></div></div></div></div></div>`,
    props: ['swapComponent']
  }
  var View12 = { // wybór zawodnika do statystyki
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-13')">1 | ZAWODNIK X</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-13')">2 | ZAWODNIK Y</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-13')">6 | ZAWODNIK Z</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-13')">7 | ZAWODNIK A</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-13')">9 | ZAWODNIK B</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-13')">11 | ZAWODNIK C</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-13')">13 | ZAWODNIK D</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View13 = { // ocena do statystyk
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-plus-circle app-fa"></i>PERFEKCYJNE</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-check-circle app-fa"></i>DOBRE</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-circle app-fa"></i>NEUTRALNE</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-times-circle app-fa"></i>NEGATYWNE</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-minus-circle app-fa"></i>BŁĄD</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View14 = { // wprowadzenie rozegrania
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><div id="app-set-div"><div class="button-group"><button class="btn app-set-button" type="submit" v-on:click="swapComponent('view-11')">IV</button><button class="btn app-set-button" type="submit" v-on:click="swapComponent('view-11')">III</button><button class="btn app-set-button" type="submit" v-on:click="swapComponent('view-11')">II</button></div><div class="button-group"><button class="btn app-set-button" type="submit" v-on:click="swapComponent('view-11')">V</button><button class="btn app-set-button" type="submit" v-on:click="swapComponent('view-11')">VI</button><button class="btn app-set-button" type="submit" v-on:click="swapComponent('view-11')">I</button></div></div></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }

  export default {
    name: 'viewsManager',
    data() {
      return {
        currentComponent: 'view-01',
        previousComponent: '',
        online: false,
        currentSet: 0,
        scoreA: 0,
        scoreB: 0,
        setting: [0,0,0,0,0,0],
        players: [
          {'id':1,'name':'','active':null},
          {'id':2,'name':'','active':null},
          {'id':3,'name':'','active':null},
          {'id':4,'name':'','active':null},
          {'id':5,'name':'','active':null},
          {'id':6,'name':'','active':null},
          {'id':7,'name':'','active':null},
          {'id':8,'name':'','active':null},
          {'id':9,'name':'','active':null},
          {'id':10,'name':'','active':null},
          {'id':11,'name':'','active':null},
          {'id':12,'name':'','active':null},
          {'id':13,'name':'','active':null},
          {'id':14,'name':'','active':null}
        ],
        serve: [],
        reception: [],
        attack: [],
        block: []
      }
    },
    components: {
      'view-01': View01,
      'view-02': View02,
      'view-03': View03,
      'view-04': View04,
      'view-05': View05,
      'view-06': View06,
      'view-07': View07,
      'view-08': View08,
      'view-09': View09,
      'view-10': View10,
      'view-11': View11,
      'view-12': View12,
      'view-13': View13,
      'view-14': View14
    },
    methods: {
      swapComponent: function(component) {
        if (component == 'previous') component = this.previousComponent;
        this.previousComponent = this.currentComponent
        this.currentComponent = component
        this.saveRoutesLocal()
      },
      saveRoutesLocal: function() {
        localStorage.setItem('currentComponent', JSON.stringify(this.currentComponent))
        localStorage.setItem('previousComponent', JSON.stringify(this.previousComponent))
      }
    }
  }
</script>

<style scoped>
</style>
