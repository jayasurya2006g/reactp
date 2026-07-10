function FeatureCard(props) {
  return (
    <div className="flex gap-6 mb-8">

      <div className="flex-1 flex-col bg-blue-100 rounded-xl p-6 h-80  flex items-center justify-center">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <img
          src={props.image}
          alt={props.title}
          loading="lazy"
          className="mt-4  w-full h-[80%] object-contain"
        />
      </div>
    </div>
  );
}

export default FeatureCard;
