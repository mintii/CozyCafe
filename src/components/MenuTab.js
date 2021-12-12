const MenuTab = () => {
  return (
    <ul class="nav nav-tabs menu_tab mb-4" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab">Breakfast</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab">Lunch</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="dinner-tab" data-toggle="tab" href="#dinner" role="tab">Dinner</a>
      </li>
    </ul>
  )
}

export default MenuTab
