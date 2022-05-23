export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own joke</p>
      <form method='POST'>
        <div>
          <label>
            Name: <input type='text' name='name' />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name='content'></textarea>
          </label>
        </div>
        <div>
          <button type='submit' className='button'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
