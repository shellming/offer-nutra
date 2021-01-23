var args='',g2='-',s2='294991332738894939';
let sendPix = function (url) {
    let version = 1.0;
    if (url.indexOf('\?') > -1) {
        url = url + '&workerV=' + version;
    } else {
        url = url + '?workerV=' + version;
    }
    return new Promise((resolve, reject) => {
        try {
            fetch(url, {mode: 'no-cors'})
                    .then(function (response) {
                        let text = response.text();
                        return resolve(text)
                    })
                    .catch((error) => {
                    });
        } catch (err) {
            return reject(err)
        }
    })
}

self.addEventListener('push', function (event) {
    let data = {};
    if (event.data) {
        try {
            data = JSON.parse(event.data.text());
        } catch (err) {
        }
    }

    let pixShow = data['showPix'] || '/?action=wpn_displayed';
    let N = registration.showNotification(data['title'], {
        body: data['body'],
        icon: data['icon'],
        image: data['image'],
        tag: data['tag'] || '1',
        requireInteraction: true,
        actions: [
            {action: 'explore', title: '------>'}
                ],
        data: data,
    }).then(() => {
        return sendPix(pixShow);
    });
    event.waitUntil(N);
});

self.addEventListener('notificationclick', (event) => {
    let N = event.notification;
    let pixClicked = N.data['clickPix'] || '/?action=wpn_clicked';
    let prom = new Promise((res, rej) => {
        return res()
    })
    if (N.data['clickURL']) {
        prom = clients.openWindow(N.data['clickURL'])
    }
    prom
            .then(() => {
                return sendPix(pixClicked)
            })
            .then(() => {
                return true;
            })
            .catch((err) => {
                sendPix(pixClicked)
            })
    event.waitUntil(prom);
    event.notification.close();
});

self.addEventListener('notificationclose', (event) => {
    let N = event.notification;
    let pixClosed = N.data['closePix'] || '/?action=wpn_closed';
    event.waitUntil(sendPix(pixClosed));
});
