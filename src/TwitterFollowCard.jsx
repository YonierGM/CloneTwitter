import { Fragment, useState } from "react";

export function TwitterFollowCard() {
  const [users, setUser] = useState([
    {
      name: "dominicode",
      userName: "domini_code",
      avatar: "domini-code",
    },
    {
      name: "Miguel Ángel Durán",
      userName: "midudev",
      avatar: "midudev",
    },
    {
      name: "Leifer Mendez (🧑‍💻)",
      userName: "LeiferMendez",
      avatar: "leiferMendez",
    },
  ]);

  return (
    <Fragment>
      <section>
        <article className="tw-recomended">
          <h1 className="tw-recomended-title">A quién seguir</h1>
          {users.map((item, index) => (
            <div className="tw-followCard" v>
              <header className="tw-followCard-header">
                <img
                  className="tw-followCard-avatar"
                  src={` https://unavatar.io/${item.avatar}`}
                  alt="Avatar del perfil"
                />

                <div className="tw-followCard-info">
                  <strong className="tw-followCard-info-name">
                    {item.name}
                  </strong>
                  <span className="tw-followCard-info-userName">
                    @{item.userName}
                  </span>
                </div>
              </header>
              <aside>
                <button className="tw-followCard-button">Seguir</button>
              </aside>
            </div>
          ))}
          <p className="tw-recomended-more">Mostrar más</p>
        </article>
      </section>
    </Fragment>
  );
}
