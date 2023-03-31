const pricing = [
	{
		name: "Kiếm Hán",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://tse2.mm.bing.net/th?id=OIP.A3tnehx5TezDF8kFpFr5kgHaHa&pid=Api&P=0",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Hán",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://tse2.mm.bing.net/th?id=OIP.A3tnehx5TezDF8kFpFr5kgHaHa&pid=Api&P=0",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Hán",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://tse2.mm.bing.net/th?id=OIP.A3tnehx5TezDF8kFpFr5kgHaHa&pid=Api&P=0",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Hán",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://tse2.mm.bing.net/th?id=OIP.A3tnehx5TezDF8kFpFr5kgHaHa&pid=Api&P=0",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Nhật",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://i.pinimg.com/474x/d3/b6/b8/d3b6b812d903a2f3b5bab149a2a4f430.jpg",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Nhật",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://i.pinimg.com/474x/d3/b6/b8/d3b6b812d903a2f3b5bab149a2a4f430.jpg",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Nhật",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://i.pinimg.com/474x/d3/b6/b8/d3b6b812d903a2f3b5bab149a2a4f430.jpg",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Nhật",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://i.pinimg.com/474x/d3/b6/b8/d3b6b812d903a2f3b5bab149a2a4f430.jpg",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Âu",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://i.pinimg.com/474x/16/83/56/168356ea9d08bbad190221c9f1b9220c.jpg",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Âu",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://i.pinimg.com/474x/16/83/56/168356ea9d08bbad190221c9f1b9220c.jpg",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Âu",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://i.pinimg.com/474x/16/83/56/168356ea9d08bbad190221c9f1b9220c.jpg",
		button: "Liên Hệ",
	},
    {
		name: "Kiếm Âu",
        heading:"Giá Mềm chất lượng, xem thêm thông tin tại đây.",
        ship:"Free U.S. Shipping",
		price_old: "2.200.000 VND",
		price_new: "1.200.000 VND",
		bg:"https://i.pinimg.com/474x/16/83/56/168356ea9d08bbad190221c9f1b9220c.jpg",
		button: "Liên Hệ",
	},
	
];
const containerPricing = document.querySelector(".container__pricing");

function render(pricing) {
	containerPricing.innerHTML = pricing.reduce((pre, curr) => {
		return (pre += `
                <div class="col-6 col-sm-6 col-md-4 col-xl-3 mt-5">
                        <div class="card main-list" style="width: 18rem;">
                        <img src="${curr.bg ?? ""}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">${curr.name}</h5>
                            <p class="card-text text-center m-1">${curr.heading}</p>
                            <p class="text-center text-success fw-bold ">${curr.ship}</p>
                            <div class="main-list__price">
                            <p class="main-list__price-old text-center text-danger fw-bold text-decoration-line-through ">${curr.price_old}</p>
                            <p class="main-list__price-new text-center text-dark fw-bold  m-1">${curr.price_new}</p>
                            </div>
                            <div class="main-list__star text-center fs-3 text-warning mb-2">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            </div>
                            <a href="https://www.facebook.com/Darkshi.11" class="btn btn-dark w-100  fs-5">${curr.button}</a>
                        </div>
                        </div>
                </div>
                `);
	}, "");
}

render(pricing);

const search = document.querySelector(".search");

search.addEventListener("change", function (e) {
	if (!e.currentTarget.value) return;

	render(
		pricing.filter(item => {
			return item.name.includes(e.currentTarget.value);
		}),
	);
});