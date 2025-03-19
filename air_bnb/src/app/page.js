import Header from '@/components/Header';
import ListingCard from '@/components/ListingCard';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ListingCard
            imageSrc="/post1.webp" 
            name="Nashik, India"
            distance="1,847"
            date="Mar 24 - 29"
            price="No.13,373"
          />
          {/* Add more ListingCard components as needed */}
        </div>
      </div>
    </div>
  );
}