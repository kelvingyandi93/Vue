<script>
  import '@fortawesome/fontawesome-free'
  import '@fortawesome/fontawesome-svg-core'
  import '@fortawesome/free-brands-svg-icons'
  import '@fortawesome/free-regular-svg-icons'
  import '@fortawesome/free-solid-svg-icons'
  import '@fortawesome/vue-fontawesome'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">KLIKFAUNA</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active my-nav-item">
          <a class="nav-link" href="#">Hewan <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item my-nav-item">
          <a class="nav-link" href="#">Prosedur</a>
        </li>
        <li class="nav-item my-nav-item">
          <a class="nav-link disabled" href="#">FAQ</a>
        </li>
        <li class="nav-item my-nav-item">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" style="width: 500pt;">
        </li>
      </ul>
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li>
          <a class="button" href="#">
            <font-awesome-icon class="NavIcon" icon="user-secret" size="2x"/>
          </a>
        </li>
        <li>
          <a class="button" href="#">
            <font-awesome-icon class="NavIcon" icon="user-secret" size="2x"/>
          </a>
        </li>
        <li>
          <a class="button" href="#">
            <font-awesome-icon class="NavIcon" icon="user-secret" size="2x"/>
          </a>
        </li>
      </ul>
      
    </div>
  </nav>
</template>

<style>
  .button {
    margin-left: 10pt;
    margin-right: 10pt;
  }

  .my-nav-item {
    margin-left: 10pt;
    margin-right: 10pt;
  }

  .NavIcon {
    size: 50pt;
  }
</style>


