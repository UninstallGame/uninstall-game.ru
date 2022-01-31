window.addEventListener("load", function (event) {
    main();
});

const fileInput = document.createElement('input');
fileInput.type = 'file'
fileInput.accept = '.jpg, .jpeg, .png, .svg, .webp';
fileInput.multiple = true;
fileInput.addEventListener('change', e => {
    const promises = Array.from(fileInput.files).map(getBase64);
    Promise.all(promises).then(it => {
        it.filter(it => it)
            .forEach(makeResultRow)
    })
})

const resultArr = [];
let rowElement;

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
    const newRow = makeRow();

    const text = newRow.querySelector('.group_text')
    const image = newRow.querySelector('.item_img')
    const btnCopy = newRow.querySelector('.images_copy');
    const btnExpand = newRow.querySelector('.images_expand')

    text.innerText = b64;
    image.src = b64
    btnCopy.addEventListener('click', () => copy(btnCopy, b64))
    btnExpand.addEventListener('click', () => toggleExpand(btnExpand, text))
    document.querySelector("#result").append(newRow)
}

function makeRow() {
    const row = document.createElement('div')
    const img = document.createElement('img')
    const group = document.createElement('div')
    const text = document.createElement('div')
    const groupImages = document.createElement('div')
    const imgExpand = document.createElement('img')
    const copy = document.createElement('div')
    const imgCopy = document.createElement('img')
    row.classList.add('result_item')
    img.classList.add('item_img')
    group.classList.add('item_group')
    text.className = 'group_text overflow-ellipsis green';
    groupImages.classList.add('group_images')
    imgExpand.className = 'images_expand cursor-pointer';
    imgExpand.style.width = "20px"
    imgExpand.style.height = "25px"
    imgCopy.style.width = "20px"
    imgExpand.src = 'assets/chevron-left-solid.svg'
    imgCopy.src = 'assets/copy-solid.svg'
    copy.classList.add('images_copy')
    copy.setAttribute('hint', 'Copy to clipboard')
    copy.append(imgCopy)
    groupImages.append(imgExpand, copy)
    group.append(text, groupImages)
    row.append(img, group)
    return row;
}

function copy(button, str) {
    button.setAttribute('hint', 'Copied!')
    window.setTimeout(() => {
        button.setAttribute('hint', 'Copy to clipboard')
    }, 1000)
    navigator.clipboard.writeText(str)
}

function toggleExpand(button, textElement) {
    button.style = textElement.classList.contains('overflow-ellipsis')
        ? 'transform: Rotate(-90deg)'
        : 'transform: Rotate(0)'
    textElement.classList.toggle('overflow-ellipsis')
}
