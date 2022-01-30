window.addEventListener("load", function (event) {
    main();
});

const fileInput = document.createElement('input');
fileInput.type = 'file'
fileInput.accept = 'image/png, image/gif, image/jpeg" /';
fileInput.multiple = true;
fileInput.addEventListener('change', e => {
    const promises = Array.from(fileInput.files).map(getBase64);
    Promise.all(promises).then(it => {
        it.filter(it => it)
            .forEach(makeResultRow)
    })
    console.log('uGame', fileInput.files)
})

const resultArr = [];

function main() {
    document.querySelector('#input').addEventListener('click', () => {
        fileInput.click();
    })
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function makeResultRow(b64) {
    resultArr.push(b64);
    const images = document.createElement('div');
    images.classList.add('item_images')
    const copy = document.createElement('img')
    copy.src = 'assets/copy-solid.svg'
    copy.style.height = '20px'
    const xxx = document.createElement('img')
    xxx.src = 'assets/chevron-up-solid.svg'
    xxx.style.height = '20px'
    const resultItem = document.createElement('div')
    resultItem.classList.add('result_item')
    const img = document.createElement('img')
    img.classList.add('item_img')
    const str = document.createElement('div')
    str.classList.add('item_text')
    str.classList.add('overflow-ellipsis')
    xxx.addEventListener('click', () => {
        xxx.src = str.classList.contains('overflow-ellipsis')
            ? 'assets/chevron-down-solid.svg'
            : 'assets/chevron-up-solid.svg'
        str.classList.toggle('overflow-ellipsis')
    })
    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(b64)
    })
    str.innerText = b64;
    img.src = b64;
    images.append(xxx, copy)
    str.append(images)
    resultItem.append(img, str)
    document.querySelector("#result").append(resultItem)
}
