export default function FlatDescription({ text }: { text: string }) {
  return (
    <p className="w-5/6 sm:w-2/3 mt-6 mx-3 text-lg text-gray-700">
      {text}
    </p>
  );
}
