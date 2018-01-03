<template>
  <div :is="currentComponent" :swap-component="swapComponent"></div>
</template>

<script>
var View00 = { // ekran ładowania
  template: `<div class="row"><div id="loading" class="col-12 align-self-start app-div-margins"><div class="loading-circle"><div class="loading-text">ŁADOWANIE</div></div></div></div>`,
  props: ['swapComponent']
}
  var View01 = { // ekran startowy
    template: `
      <div class="row">
        <div class="col-12 app-div-margins">
          <div class="col-12 app-div-margins" id="app-logo">SIATK<span>v</span>STAT</div>
          <button v-on:click="swapComponent('view-09')" class="btn app-button btn-block" type="submit">
              <i class="fa fa-arrow-right app-fa-menu"></i>NOWY MECZ
          </button>
          <button class="btn app-button btn-block" type="submit" v-on:click="/*swapComponent('view-02')*/ $parent.modalMessage = 'Opcja niedostępna. Przepraszamy!'" data-toggle="modal" data-target="#app-modal-warning">
              <i class="fa fa-user app-fa-menu"></i>LOGOWANIE
          </button>
          <button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-03')">
              <i class="fa fa-user-plus app-fa-menu"></i>REJESTRACJA
          </button>
          <button class="btn app-button btn-block" type="submit" v-on:click="/*swapComponent('view-04')*/ $parent.modalMessage = 'Opcja niedostępna. Przepraszamy!'" data-toggle="modal" data-target="#app-modal-warning">
              <i class="fa fa-archive app-fa-menu"></i>ARCHIWUM
          </button>
          <!--button class="btn app-button btn-block" type="submit" v-on:click="">
              <i class="fa fa-user app-fa-menu"></i>WYLOGUJ
          </button-->
        </div>
      <div class="col-12 align-self-end app-div-margins">
        <button class="btn app-button btn-block" type="submit" v-on:click="$parent.modalMessage = 'Aby zakończyć zamknij kartę w przeglądarce'" data-toggle="modal" data-target="#app-modal-warning">
            <i class="fa fa-window-close app-fa-menu"></i>KONIEC
        </button>
      </div>
      <div class="modal fade" id="app-modal-warning" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">UWAGA</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">{{this.$parent.modalMessage}}</div>
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
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><input type="text" class="form-control app-input" id="user-login" placeholder="Login"><input type="password" class="form-control app-input" id="user-password" placeholder="Hasło"><input type="password" class="form-control app-input" id="user-password2" placeholder="Powtórz hasło"><button class="btn app-button btn-block" type="submit" v-on:click="$parent.userRegistration()"><i class="fa fa-user-plus app-fa-menu"></i>ZAŁÓŻ KONTO</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-01')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div>
    <div class="modal fade" id="app-modal-warning" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">UWAGA</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">{{this.$parent.modalMessage}}</div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
              </div>
          </div>
        </div>
    </div></div>`,
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
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins app-div-scrollbar2"><select @change="$parent.createStatsText()" v-model="$parent.statsOption1" class="custom-select app-select"><option value="0" selected>CAŁY MECZ</option><option value="1">SET 1</option><option value="2">SET 2</option><option value="3">SET 3</option><option value="4">SET 4</option><option value="5">SET 5</option></select><select @change="$parent.createStatsText()" v-model="$parent.statsOption2" class="custom-select app-select"><option value="0" selected>PODSUMOWANIE</option><option value="1">NAJLEPSI</option><option value="2">SZCZEGÓŁY</option></select><div v-html="this.$parent.statsText"></div></div><div class="col-12 align-self-end app-div-margins app-div-underscrollbar"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('previous')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View07 = { // lista zawodników
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins app-div-scrollbar"><div v-for="player in this.$parent.playersTemp"><input min="1" max="24" type="number" class="app-input-id" v-model:value="player.id"><input type="text" maxlength="20" class="app-input-name" v-model:value="player.name"></div></div><div class="col-12 align-self-end app-div-margins app-div-underscrollbar"><button class="btn app-button btn-block" type="submit" v-on:click="function() { if($parent.checkPlayersList('playersTemp')) swapComponent('previous') }"><i class="fa fa-check-square app-fa-menu"></i>ZATWIERDŹ</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('previous')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div>
    <div class="modal fade" id="app-modal-warning" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">UWAGA</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">{{this.$parent.modalMessage}}</div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
              </div>
          </div>
        </div>
    </div>
    </div>`,
    props: ['swapComponent']
  }
  var View08 = { // zmiana hasła
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><input type="password" class="form-control app-input" id="user-password-old" placeholder="Stare hasło"><input type="password" class="form-control app-input" id="user-password" placeholder="Nowe hasło"><input type="password" class="form-control app-input" id="user-password2" placeholder="Powtórz nowe hasło"><button class="btn app-button btn-block" type="submit" v-on:click=""><i class="fa fa-check-square app-fa-menu"></i>ZATWIERDŹ</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-04')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View09 = { // ekran przedmeczowy
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="$parent.createTempPlayers(); swapComponent('view-07')"><i class="fa fa-list app-fa-menu"></i>WPROWADŹ SKŁAD</button><button class="btn app-button btn-block" type="submit" v-on:click="" data-toggle="modal" data-target="#app-modal1"><i class="fa fa-cloud-download app-fa-menu"></i>WCZYTAJ SKŁAD</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="function() { if($parent.checkPlayersList('players')){ $parent.createTempPlayers(); swapComponent('view-10');} }"><i class="fa fa-arrow-right app-fa-menu"></i>WYJŚCIOWY SKŁAD</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-01')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div>
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
    <div class="modal fade" id="app-modal-warning" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">UWAGA</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">{{this.$parent.modalMessage}}</div>
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
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins app-div-scrollbar"><div v-for="player in this.$parent.playersTemp" v-if="player.id != ''"><input v-model:value="player.active" type="checkbox" id="app-check-input1" class="app-input-check"><input v-model:value="player.id" type="text" class="app-input-id-aftercheck" id="form1ID" readonly><input v-model:value="player.name" type="text" class="app-input-name-aftercheck" id="form1name" readonly></div></div><div class="col-12 align-self-end app-div-margins app-div-underscrollbar"><button v-if="this.$parent.previousComponent == 'view-09'" class="btn app-button btn-block" type="submit" v-on:click="$parent.checkActivePlayersList()"><i class="fa fa-arrow-right app-fa-menu"></i>ROZPOCZNIJ MECZ</button><button v-else class="btn app-button btn-block" type="submit" v-on:click="$parent.checkActivePlayersList()"><i class="fa fa-arrow-right app-fa-menu"></i>ZATWIERDŹ</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('previous')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div>
    <div class="modal fade" id="app-modal-warning" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">UWAGA</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">{{this.$parent.modalMessage}}</div>
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
  var View11 = { // ekran meczowy
    template: `<div class="row"><div class="col-12 app-div-margins"><div class="align-self-start" id="app-score"><button class="btn app-score-button app-score-left text-center align-middle" type="submit" v-on:click="$parent.modifyScore(1,'A')"><i class="fa fa-plus"></i></button><button class="btn app-score-button app-score-left text-center align-middle" type="submit"  v-on:click="$parent.modifyScore(-1,'A')"><i class="fa fa-minus"></i></button><span class="score">{{this.$parent.scoreA}}:{{this.$parent.scoreB}}</span><button class="btn app-score-button app-score-right" type="submit"  v-on:click="$parent.modifyScore(1,'B')"><i class="fa fa-plus"></i></button><button class="btn app-score-button app-score-right" type="submit"  v-on:click="$parent.modifyScore(-1,'B')"><i class="fa fa-minus"></i></button></div><button class="btn app-button btn-block" type="submit" v-on:click="$parent.statisticElement = 's'; swapComponent('view-12')"><b>Z</b>AGRYWKA</button><button class="btn app-button btn-block" type="submit" v-on:click="$parent.statisticElement = 'r'; swapComponent('view-12')"><b>P</b>RZYJĘCIE</button><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-14')"><b>R</b>OZEGRANIE</button><button class="btn app-button btn-block" type="submit" v-on:click="$parent.statisticElement = 'a'; swapComponent('view-12')"><b>A</b>TAK</button><button class="btn app-button btn-block" type="submit" v-on:click="$parent.statisticElement = 'b'; swapComponent('view-12')"><b>B</b>LOK</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="function() { $parent.createStatsText(); swapComponent('view-06')}"><i class="fa fa-bar-chart app-fa-menu"></i>STATYSTYKI</button><button class="btn app-button app-button-inline" type="submit" v-on:click="function() { $parent.createTempPlayers(); swapComponent('view-10'); }"><i class="fa fa-refresh app-fa-menu"></i>ZMIANA</button><button class="btn app-button app-button-inline pull-right" type="submit" data-toggle="modal" data-target="#app-modal1"><i class="fa fa-window-close app-fa-menu"></i>KONIEC</button></div><div class="modal fade" id="app-modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">UWAGA</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div v-if="$parent.currentSet < 5" class="modal-body">Czy chcesz zakończyć set {{$parent.currentSet}}?</div><div v-if="$parent.currentSet < 5" class="modal-footer border-top-0"><button type="button" class="btn btn-secondary" data-dismiss="modal">NIE</button><button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="$parent.nextSet()">TAK</button></div><div class="modal-body">Czy chcesz zakończyć mecz? (Statystyki zostaną utracone)</div><div class="modal-footer border-top-0"><button type="button" class="btn btn-secondary" data-dismiss="modal">NIE</button><button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="$parent.resetApp()">TAK</button></div></div></div></div></div>`,
    props: ['swapComponent']
  }
  var View12 = { // wybór zawodnika do statystyki
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button v-for="player in this.$parent.players" v-if="player.active == true" class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.statisticPlayer = $parent.players.indexOf(player); swapComponent('view-13' + $parent.statisticElement)"><button class="playerNumberIcone">{{player.id}}</button> {{player.name}}</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View13s = { // ocena do statystyk - serve
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.modifyScore(1,'A'); $parent.addStat(3); swapComponent('view-11')"><i class="fa fa-plus-circle app-fa mark-fa perfect"></i>PUNKTOWA</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.addStat(2); swapComponent('view-11')"><i class="fa fa-check-circle app-fa mark-fa good"></i>BEZ ROZEGRANIA</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.addStat(1); swapComponent('view-11')"><i class="fa fa-circle app-fa mark-fa neutral"></i>Z ROZEGRANIEM</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.modifyScore(1,'B'); $parent.addStat(0); swapComponent('view-11')"><i class="fa fa-minus-circle app-fa mark-fa error"></i>BŁĄD</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View13r = { // ocena do statystyk - reception
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.addStat(4); swapComponent('view-11')"><i class="fa fa-plus-circle app-fa mark-fa perfect"></i>PERFEKCYJNE</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.addStat(3); swapComponent('view-11')"><i class="fa fa-check-circle app-fa mark-fa good"></i>Z ROZEGRANIEM</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.addStat(2); swapComponent('view-11')"><i class="fa fa-circle app-fa mark-fa neutral"></i>BEZ ROZEGRANIA</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.addStat(1); swapComponent('view-11')"><i class="fa fa-times-circle app-fa mark-fa negative"></i>BEZ ATAKU</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.modifyScore(1,'B'); $parent.addStat(0); swapComponent('view-11')"><i class="fa fa-minus-circle app-fa mark-fa error"></i>BŁĄD</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View13a = { // ocena do statystyk - attack
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.modifyScore(1,'A'); $parent.addStat(3); swapComponent('view-11')"><i class="fa fa-plus-circle app-fa mark-fa perfect"></i>PUNKTOWY</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.addStat(2); swapComponent('view-11')"><i class="fa fa-circle app-fa mark-fa neutral"></i>NIESKOŃCZONY</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.modifyScore(1,'B'); $parent.addStat(1); swapComponent('view-11')"><i class="fa fa-times-circle app-fa mark-fa negative"></i>ZABLOKOWANY</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.modifyScore(1,'B'); $parent.addStat(0); swapComponent('view-11')"><i class="fa fa-minus-circle app-fa mark-fa error"></i>BŁĄD</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View13b = { // ocena do statystyk - block
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.modifyScore(1,'A'); $parent.addStat(1); swapComponent('view-11')"><i class="fa fa-plus-circle app-fa mark-fa perfect"></i>PUNKTOWY</button><button class="btn app-button btn-block text-left" type="submit" v-on:click="$parent.modifyScore(1,'B'); $parent.addStat(0); swapComponent('view-11')"><i class="fa fa-minus-circle app-fa mark-fa error"></i>BŁĄD</button></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-12')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }
  var View14 = { // wprowadzenie rozegrania
    template: `<div class="row"><div class="col-12 align-self-start app-div-margins"><div class="set-opponent"></div><div class="set-net"></div><div id="app-set-div"><div class="button-group set-field"><button class="btn app-set-button" type="submit" v-on:click="$parent.addSetting(4); swapComponent('view-11')">IV</button><button class="btn app-set-button" type="submit" v-on:click="$parent.addSetting(3); swapComponent('view-11')">III</button><button class="btn app-set-button" type="submit" v-on:click="$parent.addSetting(2); swapComponent('view-11')">II</button></div><div class="button-group set-field"><button class="btn app-set-button" type="submit" v-on:click="$parent.addSetting(5); swapComponent('view-11')">V</button><button class="btn app-set-button" type="submit" v-on:click="$parent.addSetting(6); swapComponent('view-11')">VI</button><button class="btn app-set-button" type="submit" v-on:click="$parent.addSetting(1); swapComponent('view-11')">I</button></div></div></div><div class="col-12 align-self-end app-div-margins"><button class="btn app-button btn-block" type="submit" v-on:click="swapComponent('view-11')"><i class="fa fa-arrow-left app-fa-menu"></i>POWRÓT</button></div></div>`,
    props: ['swapComponent']
  }

    export default {
        name: 'viewsManager',
        data() {
             return {
                currentComponent: '',
                previousComponent: '',
                online: false,
                modalMessage: '',
                currentSet: 0,
                scoreA: 0,
                scoreB: 0,
                statisticElement: '',
                statisticPlayer: null,
                statsText: '',
                statsOption1: 1,
                statsOption2: 0,
                players: [
                          {'id':'1','name':'','active':false},
                          {'id':'2','name':'','active':false},
                          {'id':'3','name':'','active':false},
                          {'id':'4','name':'','active':false},
                          {'id':'5','name':'','active':false},
                          {'id':'6','name':'','active':false},
                          {'id':'','name':'','active':false},
                          {'id':'','name':'','active':false},
                          {'id':'','name':'','active':false},
                          {'id':'','name':'','active':false},
                          {'id':'','name':'','active':false},
                          {'id':'','name':'','active':false},
                          {'id':'','name':'','active':false},
                          {'id':'','name':'','active':false}
                      // {'id':'1','name':'Cwetan Sokołow','active':true},
                      // {'id':'2','name':'Davide Candellaro','active':false},
                      // {'id':'3','name':'Taylor Sander','active':true},
                      // {'id':'4','name':'Andrea Marchisio','active':false},
                      // {'id':'5','name':'Osmany Juantorena','active':true},
                      // {'id':'6','name':'Alberto Casadei','active':false},
                      // {'id':'7','name':'Dragan Stankovic','active':true},
                      // {'id':'9','name':'Jiri Kovar','active':false},
                      // {'id':'10','name':'Jenia Grebennikov','active':false},
                      // {'id':'11','name':'Micah Christenson','active':true},
                      // {'id':'12','name':'Enrico Cester','active':true},
                      // {'id':'22','name':'Sebastiano Milan','active':true},
                      // {'id':'23','name':'Timofiej Żukowski','active':false},
                      // {'id':'','name':'','active':null}
                ],
                playersTemp: [],
                serve: [
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0]
                ],
                reception: [
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0]
                ],
                attack: [
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0]
                ],
                block: [
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0],
                    [0,0]
                ],
                setting: [0,0,0,0,0,0]
            }
        },
        components: {
              'view-00': View00,
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
              'view-13s': View13s,
              'view-13r': View13r,
              'view-13a': View13a,
              'view-13b': View13b,
              'view-14': View14
        },
        methods: {
          swapComponent: function(component) { // FUNCTION IS USED FOR SHOWING SELECTED VIEW
            if (component == 'previous') component = this.previousComponent;
            this.previousComponent = this.currentComponent
            this.currentComponent = component
            this.saveRoutesLocal()
          },
          saveRoutesLocal: function() { // FUNCTION SAVES ACTUAL AND PREVIOUS VIEWS IN CASE OF CLOSING THE APP
            localStorage.setItem('currentComponent', JSON.stringify(this.currentComponent))
            localStorage.setItem('previousComponent', JSON.stringify(this.previousComponent))
          },
          checkPlayersList: function(who) { // FUNCTION CHECKS PLAYERS DATA AFTER USER APPROVEMENT
            if(who == 'players') var players = this.players // checking players before going to next step
            else if(who == 'playersTemp') var players = this.playersTemp // checking temporary players after user entering
            // 1. Are there minimum 6 numbers?
            var numbers = 0;
            for(var player in players) if(players[player].id != "") numbers++
            if(numbers < 6) {
              this.modalMessage = 'Należy wprowadzić minimum 6 zawodników z numerami'
              $('#app-modal-warning').modal()
              return 0
            }
            // 2. Are all numbers correct?
            for(var player in players) {
                if(players[player].id == "") continue
                var number = parseInt(players[player].id)
                if(isNaN(number) || (number < 1 || number > 24)) {
                    this.modalMessage = 'Wszystkie numery zawodników muszą być z przedziału 1 - 24'
                    $('#app-modal-warning').modal()
                    return 0
                }
            }
            // 3. Are all numbers unique?
            var unique = []
            for(var player in players) {
                if(players[player].id == "") continue
                if(unique.indexOf(players[player].id) == -1) unique.push(players[player].id)
                else {
                    this.modalMessage = 'Numery zawodników nie mogą się powtarzać'
                    $('#app-modal-warning').modal()
                    return 0
                }
            }
            // 4. Do all numbers have name?
            for(var player in players) {
                if(players[player].id != "" && players[player].name == "") {
                        this.modalMessage = 'Wszyscy zawodnicy muszą posiadać nazwę'
                        $('#app-modal-warning').modal()
                        return 0
                }
            }
            // 5. Are all names unique?
            var unique = []
            for(var player in players) {
                if(players[player].name == "") continue
                if(unique.indexOf(players[player].name) == -1) unique.push(players[player].name)
                else {
                    this.modalMessage = 'Nazwy zawodników nie mogą się powtarzać'
                    $('#app-modal-warning').modal()
                    return 0
                }
            }
            // 6. Do all names have numbers?
            for(var player in players) {
                if(players[player].id == "" && players[player].name != "") {
                        this.modalMessage = 'Wszyscy zawodnicy muszą posiadać numer'
                        $('#app-modal-warning').modal()
                        return 0
                }
            }

            if(who == 'playersTemp') this.players = JSON.parse(JSON.stringify(this.playersTemp))
            return 1
        },
        checkActivePlayersList: function() { // FUNCTION CHECKS ACTIVE PLAYERS LIST AFTER USER APPROVEMENT
            // 1. Are there 6-7 active numbers?
            var numbers = 0;
            for(var player in this.playersTemp) if(this.playersTemp[player].active == true) numbers++
            if(numbers > 7) {
              this.modalMessage = 'Za dużo wybranych zawodników. Należy wybrać 6 lub 7 (gdy występuje libero)'
              $('#app-modal-warning').modal()
              return 0
            }
            if(numbers < 6) {
              this.modalMessage = 'Za mało wybranych zawodników. Należy wybrać 6 lub 7 (gdy występuje libero)'
              $('#app-modal-warning').modal()
              return 0
            }
            this.players = JSON.parse(JSON.stringify(this.playersTemp))
            if(this.previousComponent == 'view-09') {
                this.setSet(1)
                this.swapComponent('view-11')
            }
            else this.swapComponent('previous')
        },
        setSet: function(set) { // FUNCTION SETS CURRENT SET AND SAVES IT TO STORAGE
            this.currentSet = set
            this.statsOption1 = set
            localStorage.setItem('currentSet', JSON.stringify(this.currentSet))
        },
        nextSet: function() {
            this.setSet(this.currentSet+1)
            this.scoreA = 0
            this.scoreB = 0
            this.setting = [0,0,0,0,0,0]
            this.serve = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
            this.attack = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
            this.block = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
            this.reception = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        },
        modifyScore: function(value, side) { // FUNCTION MODIFIES SCORE IF IT'S CORRECT
            if(side == "A" && (this.scoreA + value) >= 0 && (this.scoreA + value) < 100) this.scoreA += value
            else if(side == "B" && (this.scoreB + value) >= 0 && (this.scoreB + value) < 100) this.scoreB += value
            if(localStorage.getItem('scoreA') !== null && localStorage.getItem('scoreB') !== null) {
                var scoreA = JSON.parse(localStorage.getItem('scoreA'))
                var scoreB = JSON.parse(localStorage.getItem('scoreB'))
            } else {
                var scoreA = [0,0,0,0,0]
                var scoreB = [0,0,0,0,0]
            }
            scoreA[this.currentSet-1] = this.scoreA
            scoreB[this.currentSet-1] = this.scoreB
            localStorage.setItem('scoreA', JSON.stringify(scoreA))
            localStorage.setItem('scoreB', JSON.stringify(scoreB))
        },
        addStat: function(score) { // FUNCTION ADDS STATISTIC OF PLAYER
            var player = this.statisticPlayer
            var element = this.statisticElement
            switch(element){
                case 's':
                    this.serve[player][score]++
                    var name = 'serve' + this.currentSet
                    localStorage.setItem(name, JSON.stringify(this.serve))
                    break
                case 'r':
                    this.reception[player][score]++
                    var name = 'reception' + this.currentSet
                    localStorage.setItem(name, JSON.stringify(this.reception))
                    break
                case 'a':
                    this.attack[player][score]++
                    var name = 'attack' + this.currentSet
                    localStorage.setItem(name, JSON.stringify(this.attack))
                    break
                case 'b':
                    this.block[player][score]++
                    var name = 'block' + this.currentSet
                    localStorage.setItem(name, JSON.stringify(this.block))
                    break
            }
        },
        addSetting: function(zone) { // FUNCTION ADDS STATISTIC OF SETTING
            this.setting[zone-1]++
            var name = 'setting' + this.currentSet
            localStorage.setItem(name, JSON.stringify(this.setting))
        },
        createTempPlayers: function() { // FUNCTION COPIES PLAYERS TO TEMPORARY ARRAY FOR USER MODIFICATIONS
            this.playersTemp = JSON.parse(JSON.stringify(this.players))
        },
        createStatsText: function() { // FUNCTION CREATES TEXT DISPLAYING STATISTICS DEPENDING ON OPTION
            var set = this.statsOption1
            var display = this.statsOption2
            if(set == 0) {
                this.setting = [0,0,0,0,0,0]
                this.serve = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
                this.attack = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
                this.block = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
                this.reception = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
                var name, temporaryData
                for(var i = 1; i <= 5; i ++) {
                    name = 'setting' + i
                    if(localStorage.getItem(name) !== null) {
                        temporaryData = JSON.parse(localStorage.getItem(name))
                        for(var index in temporaryData) this.setting[index] += temporaryData[index]
                    }
                    name = 'serve' + i
                    if(localStorage.getItem(name) !== null) {
                        temporaryData = JSON.parse(localStorage.getItem(name))
                        for(var index in temporaryData) {
                            for(var index2 in temporaryData[index]) this.serve[index][index2] += temporaryData[index][index2]
                        }
                    }
                    name = 'attack' + i
                    if(localStorage.getItem(name) !== null) {
                        temporaryData = JSON.parse(localStorage.getItem(name))
                        for(var index in temporaryData) {
                            for(var index2 in temporaryData[index]) this.attack[index][index2] += temporaryData[index][index2]
                        }
                    }
                    name = 'block' + i
                    if(localStorage.getItem(name) !== null) {
                        temporaryData = JSON.parse(localStorage.getItem(name))
                        for(var index in temporaryData) {
                            for(var index2 in temporaryData[index]) this.block[index][index2] += temporaryData[index][index2]
                        }
                    }
                    name = 'reception' + i
                    if(localStorage.getItem(name) !== null) {
                        temporaryData = JSON.parse(localStorage.getItem(name))
                        for(var index in temporaryData) {
                            for(var index2 in temporaryData[index]) this.reception[index][index2] += temporaryData[index][index2]
                        }
                    }
                }
            }
            else if(set != this.currentSet) {
                var name = 'setting' + set
                if(localStorage.getItem(name) !== null) this.setting = JSON.parse(localStorage.getItem(name))
                else this.setting = [0,0,0,0,0,0]
                name = 'serve' + set
                if(localStorage.getItem(name) !== null) this.serve = JSON.parse(localStorage.getItem(name))
                else this.serve = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
                name = 'attack' + set
                if(localStorage.getItem(name) !== null) this.attack = JSON.parse(localStorage.getItem(name))
                else this.attack = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
                name = 'block' + set
                if(localStorage.getItem(name) !== null) this.block = JSON.parse(localStorage.getItem(name))
                else this.block = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
                name = 'reception' + set
                if(localStorage.getItem(name) !== null) this.reception = JSON.parse(localStorage.getItem(name))
                else this.reception = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
            }
            ///////////// initializing variables
            // points variables
            var pointsArray = []
            for(var player in this.players) {
                pointsArray.push({'index':player, 'id':this.players[player].id, 'name':this.players[player].name, 'pointsW':0, 'pointsL':0})
            }
            for(var player in this.attack) {
                pointsArray[player].pointsW += this.attack[player][3]
                pointsArray[player].pointsL += this.attack[player][0]
            }
            for(var player in this.block) {
                pointsArray[player].pointsW += this.block[player][1]
                pointsArray[player].pointsL += this.block[player][0]
            }
            for(var player in this.reception) {
                pointsArray[player].pointsL += this.reception[player][0]
            }
            for(var player in this.serve) {
                pointsArray[player].pointsW += this.serve[player][3]
                pointsArray[player].pointsL += this.serve[player][0]
            }
            pointsArray.sort(function (a,b) { let comparison = 0; if(a.pointsW < b.pointsW) {comparison = 1} else if(b.pointsW < a.pointsW) {comparison = -1} return comparison })
            // serve variables
            var serveArray = []
            for(var player in this.players) {
                serveArray.push({'index':player, 'id':this.players[player].id, 'name':this.players[player].name, 'serve0':0, 'serve1':0, 'serve2':0, 'serve3':0})
            }
            for(var player in this.serve) {
                serveArray[player].serve0 += this.serve[player][0]
                serveArray[player].serve1 += this.serve[player][1]
                serveArray[player].serve2 += this.serve[player][2]
                serveArray[player].serve3 += this.serve[player][3]
            }
            serveArray.sort(function (a,b) { let comparison = 0; if(a.serve3 < b.serve3) {comparison = 1} else if(b.serve3 < a.serve3) {comparison = -1} return comparison })
            // attack variables
            var attackArray = []
            for(var player in this.players) {
                attackArray.push({'index':player, 'id':this.players[player].id, 'name':this.players[player].name, 'attack0':0, 'attack1':0, 'attack2':0, 'attack3':0})
            }
            for(var player in this.attack) {
                attackArray[player].attack0 += this.attack[player][0]
                attackArray[player].attack1 += this.attack[player][1]
                attackArray[player].attack2 += this.attack[player][2]
                attackArray[player].attack3 += this.attack[player][3]
            }
            attackArray.sort(function (a,b) { let comparison = 0; if(a.attack3 < b.attack3) {comparison = 1} else if(b.attack3 < a.attack3) {comparison = -1} return comparison })
            // block variables
            var blockArray = []
            for(var player in this.players) {
                blockArray.push({'index':player, 'id':this.players[player].id, 'name':this.players[player].name, 'block0':0, 'block1':0})
            }
            for(var player in this.block) {
                blockArray[player].block0 += this.block[player][0]
                blockArray[player].block1 += this.block[player][1]
            }
            blockArray.sort(function (a,b) { let comparison = 0; if(a.block1 < b.block1) {comparison = 1} else if(b.block1 < a.block1) {comparison = -1} return comparison })
            // reception variables
            var receptionArray = []
            for(var player in this.players) {
                receptionArray.push({'index':player, 'id':this.players[player].id, 'name':this.players[player].name, 'reception0':0, 'reception1':0, 'reception2':0, 'reception3':0, 'reception4':0})
            }
            for(var player in this.reception) {
                receptionArray[player].reception0 += this.reception[player][0]
                receptionArray[player].reception1 += this.reception[player][1]
                receptionArray[player].reception2 += this.reception[player][2]
                receptionArray[player].reception3 += this.reception[player][3]
                receptionArray[player].reception4 += this.reception[player][4]
            }
            receptionArray.sort(function (a,b) { let comparison = 0; if((a.reception4+a.reception3+a.reception2+a.reception1+a.reception0)==0) comparison = 1; else if((b.reception4+b.reception3+b.reception2+b.reception1+b.reception0)==0) comparison = -1; else{if(a.reception4/(a.reception4+a.reception3+a.reception2+a.reception1+a.reception0) < b.reception4/(b.reception4+b.reception3+b.reception2+b.reception1+b.reception0)) {comparison = 1} else if(b.reception4/(b.reception4+b.reception3+b.reception2+b.reception1+b.reception0) < a.reception4/(a.reception4+a.reception3+a.reception2+a.reception1+a.reception0)) {comparison = -1}} return comparison })
            // setting variables
            var setsSum = this.setting[0]+this.setting[1]+this.setting[2]+this.setting[3]+this.setting[4]+this.setting[5]
            var settingZones = [this.setting[0],this.setting[1],this.setting[2],this.setting[3],this.setting[4],this.setting[5]]
            ////////////////// counting
            // points counting
            var points = '<div class="stats"><b>PUNKTY:</b><br>'
            var counter = 0;
            if(display == 0) {
                for(player in pointsArray) {
                    if(pointsArray[player].pointsW > 0) {
                        points += '<hr class="stats-small">'
                        points += ((++counter) + '. ')
                        points += '#' + pointsArray[player].id + ' '
                        points += (pointsArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>')
                        points += pointsArray[player].pointsW + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        points += pointsArray[player].pointsL + ')<br>'
                    }
                }
            } else if(display == 1) {
                for(player in pointsArray) {
                    if(pointsArray[player].pointsW > 0) {
                        points += '<hr class="stats-small">'
                        points += ((++counter) + '. ')
                        points += '#' + pointsArray[player].id + ' '
                        points += (pointsArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>')
                        points += pointsArray[player].pointsW + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        points += pointsArray[player].pointsL + ')<br>'
                    }
                    if(counter == 3) break;
                }
            } else if(display == 2) {
                for(player in pointsArray) {
                    if(pointsArray[player].pointsW > 0) {
                        points += '<hr class="stats-small">'
                        points += ((++counter) + '. ')
                        points += '#' + pointsArray[player].id + ' '
                        points += (pointsArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>')
                        points += pointsArray[player].pointsW + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        points += pointsArray[player].pointsL + ')<br>'
                        points += '<b>A</b>: '
                        if(this.attack[pointsArray[player].index][3] > 0) points += '+'
                        points += this.attack[pointsArray[player].index][3] + '('
                        if(this.attack[pointsArray[player].index][0] > 0) points += '-'
                        points += this.attack[pointsArray[player].index][0] + ') '
                        points += '<b>Z</b>: '
                        if(this.serve[pointsArray[player].index][3] > 0) points += '+'
                        points += this.serve[pointsArray[player].index][3] + '('
                        if(this.serve[pointsArray[player].index][0] > 0) points += '-'
                        points += this.serve[pointsArray[player].index][0] + ') '
                        points += '<b>B</b>: '
                        if(this.block[pointsArray[player].index][1] > 0) points += '+'
                        points += this.block[pointsArray[player].index][1] + '('
                        if(this.block[pointsArray[player].index][0] > 0) points += '-'
                        points += this.block[pointsArray[player].index][0] + ') '
                    }
                }
            }

            // serve counting
            var serve = '</div><div class="stats"><b>ZAGRYWKA:</b><br>'
            var counter = 0;
            if(display == 0) {
                for(player in serveArray) {
                    if((serveArray[player].serve0 + serveArray[player].serve1 + serveArray[player].serve2 + serveArray[player].serve3) > 0) {
                        serve += '<hr class="stats-small">'
                        serve += ((++counter) + '. ')
                        serve += '#' + serveArray[player].id + ' '
                        serve += serveArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        serve += serveArray[player].serve3 + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        serve += serveArray[player].serve0 + ')<br>'
                    }
                }
            } else if(display == 1) {
                for(player in serveArray) {
                    if((serveArray[player].serve3) > 0) {
                        serve += '<hr class="stats-small">'
                        serve += ((++counter) + '. ')
                        serve += '#' + serveArray[player].id + ' '
                        serve += serveArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        serve += serveArray[player].serve3 + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        serve += serveArray[player].serve0 + ')<br>'
                    }
                    if(counter == 3) break;
                }
            } else if(display == 2) {
                for(player in serveArray) {
                    if((serveArray[player].serve0 + serveArray[player].serve1 + serveArray[player].serve2 + serveArray[player].serve3) > 0) {
                        serve += '<hr class="stats-small">'
                        serve += ((++counter) + '. ')
                        serve += '#' + serveArray[player].id + ' '
                        serve += serveArray[player].name + '<br>punkty: '
                        serve += serveArray[player].serve3 + '/'
                        serve += (serveArray[player].serve0 + serveArray[player].serve1 + serveArray[player].serve2 + serveArray[player].serve3) + ' ('
                        serve += Math.round(100 * serveArray[player].serve3 / (serveArray[player].serve0 + serveArray[player].serve1 + serveArray[player].serve2 + serveArray[player].serve3))
                        serve += '%)<br>'
                        serve += '<i class="fa fa-plus-circle mark-fa perfect"></i>:' + serveArray[player].serve3
                        serve += ' <i class="fa fa-check-circle mark-fa good"></i>:' + serveArray[player].serve2
                        serve += ' <i class="fa fa-circle mark-fa neutral"></i>:' + serveArray[player].serve1
                        serve += ' <i class="fa fa-minus-circle mark-fa error"></i>:' + serveArray[player].serve0
                    }
                }
            }
            // attack counting
            var attack = '</div><div class="stats"><b>ATAK:</b><br>'
            var counter = 0;
            if(display == 0) {
                for(player in attackArray) {
                    if((attackArray[player].attack0 + attackArray[player].attack1 + attackArray[player].attack2 + attackArray[player].attack3) > 0) {
                        attack += '<hr class="stats-small">'
                        attack += ((++counter) + '. ')
                        attack += '#' + attackArray[player].id + ' '
                        attack += attackArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        attack += attackArray[player].attack3 + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        attack += attackArray[player].attack0 + ')<br>'
                    }
                }
            } else if(display == 1) {
                for(player in attackArray) {
                    if(attackArray[player].attack3 > 0) {
                        attack += '<hr class="stats-small">'
                        attack += ((++counter) + '. ')
                        attack += '#' + attackArray[player].id + ' '
                        attack += attackArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        attack += attackArray[player].attack3 + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        attack += attackArray[player].attack0 + ')<br>'
                    }
                    if(counter == 3) break;
                }
            } else if(display == 2) {
                for(player in attackArray) {
                    if((attackArray[player].attack0 + attackArray[player].attack1 + attackArray[player].attack2 + attackArray[player].attack3) > 0) {
                        attack += '<hr class="stats-small">'
                        attack += ((++counter) + '. ')
                        attack += '#' + attackArray[player].id + ' '
                        attack += attackArray[player].name + '<br>punkty: '
                        attack += attackArray[player].attack3 + '/'
                        attack += (attackArray[player].attack0 + attackArray[player].attack1 + attackArray[player].attack2 + attackArray[player].attack3) + ' ('
                        attack += Math.round(100 * attackArray[player].attack3 / (attackArray[player].attack0 + attackArray[player].attack1 + attackArray[player].attack2 + attackArray[player].attack3))
                        attack += '%)<br>'
                        attack += '<i class="fa fa-plus-circle mark-fa perfect"></i>:' + attackArray[player].attack3
                        attack += ' <i class="fa fa-circle mark-fa neutral"></i>:' + attackArray[player].attack2
                        attack += ' <i class="fa fa-times-circle mark-fa negative"></i>:' + attackArray[player].attack1
                        attack += ' <i class="fa fa-minus-circle mark-fa error"></i>:' + attackArray[player].attack0
                    }
                }
            }

            // block counting
            var block = '</div><div class="stats"><b>BLOK:</b><br>'
            var counter = 0;
            if(display == 0) {
                for(player in blockArray) {
                    if((blockArray[player].block0 + blockArray[player].block1) > 0) {
                        block += '<hr class="stats-small">'
                        block += ((++counter) + '. ')
                        block += '#' + blockArray[player].id + ' '
                        block += blockArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        block += blockArray[player].block1 + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        block += blockArray[player].block0 + ')<br>'
                    }
                }
            } else if(display == 1) {
                for(player in blockArray) {
                    if(blockArray[player].block1 > 0) {
                        block += '<hr class="stats-small">'
                        block += ((++counter) + '. ')
                        block += '#' + blockArray[player].id + ' '
                        block += blockArray[player].name + '<br>punkty: <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        block += blockArray[player].block1 + ' (błędy: <i class="fa fa-minus-circle mark-fa error"></i>'
                        block += blockArray[player].block0 + ')<br>'
                    }
                    if(counter == 3) break;
                }
            } else if(display == 2) {
                for(player in blockArray) {
                    if((blockArray[player].block0 + blockArray[player].block1) > 0) {
                        block += '<hr class="stats-small">'
                        block += ((++counter) + '. ')
                        block += '#' + blockArray[player].id + ' '
                        block += blockArray[player].name + '<br>'
                        block += '<i class="fa fa-plus-circle mark-fa perfect"></i>:' + blockArray[player].block1
                        block += ' <i class="fa fa-minus-circle mark-fa error"></i>:' + blockArray[player].block0
                    }
                }
            }
            // reception counting
            var reception = '</div><div class="stats"><b>PRZYJĘCIE:</b><br>'
            var counter = 0;
            if(display == 0) {
                for(player in receptionArray) {
                    if((receptionArray[player].reception0 + receptionArray[player].reception1 + receptionArray[player].reception2 + receptionArray[player].reception3 + receptionArray[player].reception4) > 0) {
                        reception += '<hr class="stats-small">'
                        reception += ((++counter) + '. ')
                        reception += '#' + receptionArray[player].id + ' '
                        reception += receptionArray[player].name + '<br>perf. <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        reception += Math.round(100*receptionArray[player].reception4/(receptionArray[player].reception4+receptionArray[player].reception3+receptionArray[player].reception2+receptionArray[player].reception1+receptionArray[player].reception0)) + '%, dobre <i class="fa fa-check-circle mark-fa good"></i>' + Math.round(100*(receptionArray[player].reception3+receptionArray[player].reception4)/(receptionArray[player].reception4+receptionArray[player].reception3+receptionArray[player].reception2+receptionArray[player].reception1+receptionArray[player].reception0)) + '%<br>'
                    }
                }
            } else if(display == 1) {
                for(player in receptionArray) {
                    if((receptionArray[player].reception0 + receptionArray[player].reception1 + receptionArray[player].reception2 + receptionArray[player].reception3 + receptionArray[player].reception4) > 0) {
                        reception += '<hr class="stats-small">'
                        reception += ((++counter) + '. ')
                        reception += '#' + receptionArray[player].id + ' '
                        reception += receptionArray[player].name + '<br>perf. <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        reception += Math.round(100*receptionArray[player].reception4/(receptionArray[player].reception4+receptionArray[player].reception3+receptionArray[player].reception2+receptionArray[player].reception1+receptionArray[player].reception0)) + '%, dobre <i class="fa fa-check-circle mark-fa good"></i>' + Math.round(100*(receptionArray[player].reception3+receptionArray[player].reception4)/(receptionArray[player].reception4+receptionArray[player].reception3+receptionArray[player].reception2+receptionArray[player].reception1+receptionArray[player].reception0)) + '%<br>'
                    }
                    if(counter == 3) break;
                }
            } else if(display == 2) {
                for(player in receptionArray) {
                    if((receptionArray[player].reception0 + receptionArray[player].reception1 + receptionArray[player].reception2 + receptionArray[player].reception3 + receptionArray[player].reception4) > 0) {
                        reception += '<hr class="stats-small">'
                        reception += ((++counter) + '. ')
                        reception += '#' + receptionArray[player].id + ' '
                        reception += receptionArray[player].name + '<br>perf. <i class="fa fa-plus-circle mark-fa perfect"></i>'
                        reception += Math.round(100*receptionArray[player].reception4/(receptionArray[player].reception4+receptionArray[player].reception3+receptionArray[player].reception2+receptionArray[player].reception1+receptionArray[player].reception0)) + '%, dobre <i class="fa fa-check-circle mark-fa good"></i>' + Math.round(100*(receptionArray[player].reception3+receptionArray[player].reception4)/(receptionArray[player].reception4+receptionArray[player].reception3+receptionArray[player].reception2+receptionArray[player].reception1+receptionArray[player].reception0)) + '%<br>'
                        reception += '<i class="fa fa-plus-circle mark-fa perfect"></i>:' + receptionArray[player].reception4
                        reception += ' <i class="fa fa-check-circle mark-fa good"></i>:' + receptionArray[player].reception3
                        reception += ' <i class="fa fa-circle mark-fa neutral"></i>:' + receptionArray[player].reception2
                        reception += ' <i class="fa fa-times-circle mark-fa negative"></i>:' + receptionArray[player].reception1
                        reception += ' <i class="fa fa-minus-circle mark-fa error"></i>:' + receptionArray[player].reception0
                    }
                }
            }
            // setting counting
            var setting = '</div><div class="stats"><b>ROZEGRANIE:</b><br>'
            if(display == 0)
            {
                if(setsSum > 0) setting += '<table class="stats"><tr class="stats"><td>IV: ' + Math.round(100*settingZones[3]/setsSum) + '%</td><td>III: ' + Math.round(100*settingZones[2]/setsSum) + '%</td><td>II: ' + Math.round(100*settingZones[1]/setsSum) + '%</td></tr><tr class="stats"><td>V: ' + Math.round(100*settingZones[4]/setsSum) + '%</td><td>VI: ' + Math.round(100*settingZones[5]/setsSum) + '%</td><td>I: ' + Math.round(100*settingZones[0]/setsSum) + '%</td></tr></table>'
            } else if(display == 1) {
                setting = ""
            } else if(display == 2) {
                if(setsSum > 0) setting += '<table class="stats"><tr class="stats"><td>IV: ' + Math.round(100*settingZones[3]/setsSum) + '%<br>' + settingZones[3] + '/' + setsSum + '</td><td>III: ' + Math.round(100*settingZones[2]/setsSum) + '%<br>' + settingZones[2] + '/' + setsSum + '</td><td>II: ' + Math.round(100*settingZones[1]/setsSum) + '%<br>' + settingZones[1] + '/' + setsSum + '</td></tr><tr class="stats"><td>V: ' + Math.round(100*settingZones[4]/setsSum) + '%<br>' + settingZones[4] + '/' + setsSum + '</td><td>VI: ' + Math.round(100*settingZones[5]/setsSum) + '%<br>' + settingZones[5] + '/' + setsSum + '</td><td>I: ' + Math.round(100*settingZones[0]/setsSum) + '%<br>' + settingZones[0] + '/' + setsSum + '</td></tr></table>'
            }
            setting += '</div>'


            // Displaying
            this.statsText = points + serve + attack + block + reception + setting

            // clearing (restore stats from current set)
            if(set != this.currentSet) {
                var name = 'setting' + this.currentSet
                if(localStorage.getItem(name) !== null) this.setting = JSON.parse(localStorage.getItem(name))
                else this.setting = [0,0,0,0,0,0]
                name = 'serve' + this.currentSet
                if(localStorage.getItem(name) !== null) this.serve = JSON.parse(localStorage.getItem(name))
                else this.serve = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
                name = 'attack' + this.currentSet
                if(localStorage.getItem(name) !== null) this.attack = JSON.parse(localStorage.getItem(name))
                else this.attack = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
                name = 'block' + this.currentSet
                if(localStorage.getItem(name) !== null) this.block = JSON.parse(localStorage.getItem(name))
                else this.block = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
                name = 'reception' + this.currentSet
                if(localStorage.getItem(name) !== null) this.reception = JSON.parse(localStorage.getItem(name))
                else this.reception = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
            }
        },
        resetApp: function() {
            localStorage.clear()
            Object.assign(this.$data, this.$options.data.call(this))
            this.swapComponent('view-01')
        },
        loadingPage: function() {
            var self = this;
            var xyz = setTimeout(function(){
                self.swapComponent('view-01')
            }, 1500);
        },
        userRegistration: function() {
            var login = document.getElementById('user-login').value
            var pass = document.getElementById('user-password').value
            var pass2 = document.getElementById('user-password2').value
            // validation:
            if(login == "") {
                this.modalMessage = 'Nie wpisano loginu'
                $('#app-modal-warning').modal()
                return 0;
            }
            if(pass == "") {
                this.modalMessage = 'Nie wpisano hasła'
                $('#app-modal-warning').modal()
                return 0;
            }
            if(pass2 == "") {
                this.modalMessage = 'Nie wpisano powtórzonego hasła'
                $('#app-modal-warning').modal()
                return 0;
            }
            if(pass != pass2) {
                this.modalMessage = 'Hasła nie są identyczne'
                $('#app-modal-warning').modal()
                return 0;
            }
            this.swapComponent('view-00')
            var xhttp = new XMLHttpRequest()
            xhttp.open("POST", "http://www.matmikus.webd.pl/api.php/get-user", false)
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            xhttp.send('name='+login)
            this.swapComponent('view-03')
            // console.log(xhttp.status)
            if(xhttp.status != 204) {
                this.modalMessage = 'Login jest już zajęty'
                $('#app-modal-warning').modal()
            }
            else {
                var sha1 = require('sha1');
                pass = sha1(pass)
                var xhttp = new XMLHttpRequest()
                xhttp.open("POST", "http://www.matmikus.webd.pl/api.php/create-user", false)
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                xhttp.send('name='+login+'&password='+pass)
                this.swapComponent('view-03')
                if(xhttp.status == 200) {
                    this.modalMessage = 'Konto zostało utworzone pomyślnie!'
                    $('#app-modal-warning').on('hidden.bs.modal', function () {
                        this.swapComponent('view-01')
                    })
                    $('#app-modal-warning').modal('show')
                    // this.swapComponent('view-01')
                    // alert(this.modalMessage)
                } else {
                    this.modalMessage = 'Wystąpił błąd i konto nie zostało utworzone'
                    $('#app-modal-warning').modal()
                }
            }
        },
        userSignIn: function() {
            
        }
      },
      created: function() {
          if(localStorage.getItem('currentComponent') !== null) this.currentComponent = JSON.parse(localStorage.getItem('currentComponent'))
          if(localStorage.getItem('previousComponent') !== null) this.previousComponent = JSON.parse(localStorage.getItem('previousComponent'))
          if(localStorage.getItem('currentSet') !== null) {
              this.currentSet = JSON.parse(localStorage.getItem('currentSet'))
              this.statsOption1 = JSON.parse(localStorage.getItem('currentSet'))
          }
          if(this.currentSet > 0) this.currentComponent = "view-11"
          else {
              this.currentComponent = "view-00"
              window.onload = this.loadingPage()
          }
          var name = 'setting' + this.currentSet
          if(localStorage.getItem(name) !== null) this.setting = JSON.parse(localStorage.getItem(name))
          name = 'serve' + this.currentSet
          if(localStorage.getItem(name) !== null) this.serve = JSON.parse(localStorage.getItem(name))
          name = 'attack' + this.currentSet
          if(localStorage.getItem(name) !== null) this.attack = JSON.parse(localStorage.getItem(name))
          name = 'block' + this.currentSet
          if(localStorage.getItem(name) !== null) this.block = JSON.parse(localStorage.getItem(name))
          name = 'reception' + this.currentSet
          if(localStorage.getItem(name) !== null) this.reception = JSON.parse(localStorage.getItem(name))
      }
    }
</script>

<style scoped>
</style>
