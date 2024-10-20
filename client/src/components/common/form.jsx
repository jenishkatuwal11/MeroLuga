function CommonForm({ formControl }) {
  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControl.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label></Label>
          </div>
        ))}
      </div>
    </form>
  );
}

export default CommonForm;
