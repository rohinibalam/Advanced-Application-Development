const ManageThemesPage = () => {
  const themes = [
    {
      id: 1,
      name: "Princess Party",
      description: "A magical princess-themed birthday party fit for royalty.",
      price: 299.99,
      imageUrl:
        "https://images.homevents.in/service/decorations/simple-balloon-decorations/simple-balloon-decorations-d3f23d43-6ea9-430d-89ab-a0954f04b3e2.jpg",
    },
    {
      id: 2,
      name: "Superhero Bash",
      description:
        "An action-packed superhero-themed party for young crime fighters.",
      price: 249.99,
      imageUrl:
        "https://images.homevents.in/service/decorations/simple-balloon-decorations/simple-balloon-decorations-f8820fc7-e75f-492d-a74c-3c903e1cfeb5.jpeg",
    },
    // Add more dummy themes as needed
  ];

  const deleteTheme = (themeId) => {
    // Logic to delete theme
    console.log("Deleted theme with ID:", themeId);
  };

  const editTheme = (themeId) => {
    // Logic to edit theme
    console.log("Editing theme with ID:", themeId);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Manage Themes</h1>
      <div className="grid grid-cols-2 gap-4">
        {themes.map((theme) => (
          <div key={theme.id} className="p-4 border border-gray-200 rounded-lg">
            <img
              src={theme.imageUrl}
              alt={theme.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{theme.name}</h2>
            <p className="text-gray-600">{theme.description}</p>
            <p className="text-gray-800 font-bold">
              ₹ {theme.price.toFixed(2)}
            </p>
            <div className="mt-4">
              <button
                onClick={() => editTheme(theme.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTheme(theme.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageThemesPage;
