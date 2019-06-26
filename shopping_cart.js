var $containerProductСart = document.getElementsByClassName("container-product-cart")
var $form = document.createElement('form');
$form.setAttribute('action', '#', 'id', 'form');
$form.setAttribute('id', 'form');

$containerProductСart[0].appendChild($form);

var $form = document.getElementById('form');
var $topLabel = document.createElement('div');
$topLabel.className = 'top-label';

$form.appendChild($topLabel);

var labels = ['Product detail', 'unit Price', 'Quantity', 'shipping', 'Subtotal', 'ACTION']

var $topLabel = document.getElementsByClassName('top-label');

for (i = 0; i < 6; i++) {
    var $productCartLabel = document.createElement('div');
    $productCartLabel.className = 'product-cart__label';
    $productCartLabel.innerHTML = labels[i];

    $topLabel[0].appendChild($productCartLabel);
}

var cart = [{
        name: 'Mango People T-shirt',
        photo: 'img/f10.jpg',
        unitPrice: '150$',
        quantity: 2,
        shipping: 'free',
        subtotal: '300$',
    },
    {
        name: 'Mango People T-shirt',
        photo: 'img/f9.jpg',
        unitPrice: '150$',
        quantity: 2,
        shipping: 'free',
        subtotal: '300$',
    },
    {
        name: 'Mango People T-shirt',
        photo: 'img/f8.jpg',
        unitPrice: '150$',
        quantity: 2,
        shipping: 'free',
        subtotal: '300$',
    }
]

for (i = 0; i < cart.length; i++) {
    var $productBlock = document.createElement('div');
    $productBlock.className = 'product-block';
    $form.appendChild($productBlock);

    var $productBlock = document.getElementsByClassName('product-block');

    for (j = 0; j < 6; j++) {
        var $prodBlock = document.createElement('div');
        $prodBlock.className = 'prod-block';
        $productBlock[i].appendChild($prodBlock);

        var $prodBlock = document.getElementsByClassName('prod-block');
        switch(j) {
            case 0:
                var $prodBlock = document.getElementsByClassName('prod-block');
                var $link = document.createElement('a');
                $link.setAttribute('href', '#');
                $link.target = '_blank';

                $prodBlock[$prodBlock.length-1].appendChild($link);

                var $prodBlockLink = document.createElement('div');
                $prodBlockLink.className = 'prod-block__link';

                $link.appendChild($prodBlockLink);

                var $prodBlockPhoto = document.createElement('div');
                $prodBlockPhoto.className = 'prod-block__photo';

                $prodBlock[$prodBlock.length-1].appendChild($prodBlockPhoto);

                var $img = document.createElement('img');
                $img.src = cart[i].photo;
                $img.alt = 'product_img';

                $prodBlockPhoto.appendChild($img);

                var $prodTitle = document.createElement('h3');
                $prodTitle.innerHTML = cart[i].name;

                $prodBlock[$prodBlock.length - 1].appendChild($prodTitle);

                var $prodDetails = document.createElement('p');
                $prodDetails.innerHTML = '<span>Color: </span>Red <br> <span>Size: </span>Xll';

                $prodBlock[$prodBlock.length - 1].appendChild($prodDetails);
            break;
            case 1:
                var $prodBlock = document.getElementsByClassName('prod-block');
                var $prodCost = document.createElement('p');
                $prodCost.innerHTML = cart[i].unitPrice;
                $prodBlock[$prodBlock.length - 1].appendChild($prodCost);
            break;

            case 2:
                var $prodBlock = document.getElementsByClassName('prod-block');
                var $input = document.createElement('input');
                $input.id = 'qty';
                $input.type = 'number';
                $input.min = '1';
                $input.max = '100';
                $input.required = 'true';
                $input.value = cart[i].quantity;
                $prodBlock[$prodBlock.length - 1].appendChild($input);
            break;

            case 3:
                var $prodBlock = document.getElementsByClassName('prod-block');
                var $shipping = document.createElement('p');
                $shipping.innerHTML = cart[i].shipping;
                $prodBlock[$prodBlock.length - 1].appendChild($shipping);
            break;

            case 4:
                var $prodBlock = document.getElementsByClassName('prod-block');
                var $sum = document.createElement('p');
                $sum.innerHTML = cart[i].subtotal;
                $prodBlock[$prodBlock.length - 1].appendChild($sum);
            break;

            case 5:
                var $prodBlock = document.getElementsByClassName('prod-block');
                var $deleteItem = document.createElement('a');
                $deleteItem.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
                $prodBlock[$prodBlock.length - 1].appendChild($deleteItem);
            break;

        }


    }


}