export default function addWaterModal() {
  return (
    <div>
      <h1>Add water intake</h1>
      <form>
        <label>
          How much water Enter milliliters
          <input type="text" placeholder="Enter milliliters" />
        </label>

        <button type="submit" onSubmit="">
          Confirm
        </button>

        <button type="submit" onSubmit="">
          Cancel
        </button>
      </form>
    </div>
  );
}
