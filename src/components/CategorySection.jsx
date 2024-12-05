
const categories = [
  { title: "Customized Journal",
     img: "img1.png",
     price:200
     },
  { title: "Floral Greeting Card Set", img: "img2.avif", price:300 },
  { title: "Premium Leather Diary", img: "img3.jpeg", price:400 },
  { title: "Eco-Friendly Pen Pack", img: "img4.png", price:700 },
];

const CategorySection = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Shop by Category</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <div key={category.title} style={{ textAlign: 'center' }}>
            <img src={category.img} alt={category.title} style={{ width: '150px', borderRadius: '8px' }} />
            <h3>{category.title}</h3>
            <h2>price:{category.price}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
