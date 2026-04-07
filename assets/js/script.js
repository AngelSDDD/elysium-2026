document.addEventListener('DOMContentLoaded', function() {
    var numerosWA = {
        sanz: '5217715026581',
        cris: '5217331044511',
        aldo: '5217714252464'
    };
    
    var usuariosIG = {
        fran: 'frxnsxnz',
        cris: 'cris_hc21',
        percastegui: 'percastegui_12'
    };
    
    var fechaFiesta = new Date(2026, 4, 1, 17, 0, 0);
    
    function actualizarContador() {
        var ahora = new Date();
        var diff = fechaFiesta - ahora;
        
        if (diff <= 0) return;
        
        var segundosTotales = Math.floor(diff / 1000);
        var dias = Math.floor(segundosTotales / 86400);
        var horas = Math.floor((segundosTotales % 86400) / 3600);
        var minutos = Math.floor((segundosTotales % 3600) / 60);
        var segundos = segundosTotales % 60;
        
        document.getElementById('dias').innerText = (dias < 10 ? '0' : '') + dias;
        document.getElementById('horas').innerText = (horas < 10 ? '0' : '') + horas;
        document.getElementById('minutos').innerText = (minutos < 10 ? '0' : '') + minutos;
        document.getElementById('segundos').innerText = (segundos < 10 ? '0' : '') + segundos;
    }
    
    actualizarContador();
    setInterval(actualizarContador, 1000);
    
    document.querySelectorAll('.btn-wa').forEach(btn => {
        btn.addEventListener('click', function() {
            var n = numerosWA[this.getAttribute('data-numero')];
            window.open('https://wa.me/' + n, '_blank');
        });
    });
    
    document.querySelectorAll('.btn-ig').forEach(btn => {
        btn.addEventListener('click', function() {
            var u = usuariosIG[this.getAttribute('data-ig')];
            window.open('https://instagram.com/' + u, '_blank');
        });
    });
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);


document.addEventListener('keydown', function(e) {
    // Bloquear F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
   
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }

    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
}, false);


setInterval(function() {
    console.clear();
    console.log("%c¡ACCESO RESTRINGIDO!", "color: red; font-size: 30px; font-weight: bold; text-shadow: 2px 2px black;");
    console.log("%cEste código es propiedad privada de ELYSIUM. No intentes copiar.", "color: white; font-size: 14px;");
}, 1000);