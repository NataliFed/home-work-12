import  {users} from "./data"

  const container = document.querySelector(".container");
  
  const createHtml = ({ id, name, country, email, company, birthday }) => `
    <tr>
      <td class="id">${id}</td>
      <td class="user-name">${name}</td>
      <td class="user-country">${country}</td>
      <td class="user-email">${email}</td>
      <td class="user-company">${company}</td>
      <td class="user-birthday">${birthday}</td>
    </tr>
 `;

  const render = () => {
    const elements = users.map((user) => {
      const element = document.createElement("table");

      element.className = "user-table";

      element.innerHTML = createHtml(user);

      return element;
    });
    container.append(...elements);
  };
  render();
