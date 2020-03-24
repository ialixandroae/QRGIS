$(document).ready(function(){
    console.log('App init.');
    
    const btnCreateApp = document.getElementById('btnCreateApp');
    const inputProjectTitle = document.getElementById('projectTitle');
    const inputProjectLocation = document.getElementById('projectLocation');
    const projectBasemap = document.getElementById('projectBasemap');
    const projectAppColor = document.getElementById('projectAppColor');

    $('#projectTitle').keyup((evt) => {
        if (inputProjectTitle.value.length > 0 && inputProjectLocation.value.length > 0 ) {
            document.getElementById('btnCreateApp').removeAttribute('disabled');
        } else {
            document.getElementById('btnCreateApp').setAttribute('disabled', true);
        }
    });

    $('#projectLocation').keyup((evt) => {
        if (inputProjectTitle.value.length > 0 && inputProjectLocation.value.length > 0) {
            document.getElementById('btnCreateApp').removeAttribute('disabled');
        } else {
            document.getElementById('btnCreateApp').setAttribute('disabled', true);
        }
    });
    
    btnCreateApp.addEventListener('click', (e) => {
        e.preventDefault()
        let projectName = inputProjectTitle.value;
        let projectLocation = inputProjectLocation.value;
        let projectBasemapValue = projectBasemap.options[projectBasemap.selectedIndex].text.toLowerCase();
        let projectAppColorValue = projectAppColor.options[projectAppColor.selectedIndex].text.toLowerCase();
        
        let data = {
            name: projectName,
            location: projectLocation, 
            basemap: projectBasemapValue, 
            color: projectAppColorValue
        };
        // console.log(data);
        const url = window.location.origin;
        $.ajax(`${url}/api/v1/generate`, {
            data: JSON.stringify(data),
            contentType: 'application/json',
            type: 'POST',
            success: function(response) {
                $('.card-qr').attr('src', response.qr);
                $('#app_title').text(projectName);
                $('#app_title').prop('href', `${url}/${response.id}`);
                $('.view-app').prop('href', `${url}/${response.id}`);
                $('#qrcode').show();
            }
        });
    });

    seeAllApps();
    backToMainPage();
  });

  const seeAllApps = () => {
    $('#see_all_apps').click(() => {
        $('.main').hide();
        $('.second').show();
        const url = window.location.origin;
        console.log(url);
        $.ajax(`${url}/api/v1/data`, {
            contentType: 'application/json',
            type: 'GET',
            success: function(response) {
                createAppList(response);
            }
        });
    })
  };

  const createAppList = (data) => {
    data.data.apps.map(app => {
        const url = window.location.origin;
        console.log(url);
        const cardApp = `
            <div class="card card-wide">
                <figure class="card-wide-image-wrap">
                    <img class="card-wide-image" src="${app.qr}" style="height: 100%">
                    <div class="card-image-caption">
                        ID: ${app.id}
                    </div>
                </figure>
                <div class="card-content">
                    <h4 class="trailer-half"><a href="${url}/${app.id}" target="_blank">${app.name}</a></h4>
                    <a href="${url}/${app.id}" target="_blank" class="btn view-app btn-fill leader-1">View Application</a>
                </div>
            </div>
        `;
        $('.card-apps').append(cardApp)
    });
  };

  const backToMainPage = () => {
    $('.back-to-main').click(() => {
        $('.second').hide();
        $('.main').show();
        $('.card-apps').empty();
    });
  };