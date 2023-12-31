import React, { useMemo } from "react";

interface Props {
  color?: string;
  size?: string;
}

const Sequelize = ({ color = "white", size = "1rem" }: Props) => {
  const colors = useMemo(() => {
    if (color === "white") {
      return {
        0: "#fff",
        1: "#ffffffa6",
        2: "#ffffff5c",
      };
    }

    return {
      0: "#03afef",
      1: "#2379bd",
      2: "#2f406a",
    };
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 32 32">
      <path
        fill={colors[2]}
        d="M24.612 10.929v10.087l-8.571 5.071-.077.07v3.77l.077.073 12.071-6.972V8.972L28 8.945l-3.4 1.9.017.082"
      ></path>
      <path
        fill={colors[1]}
        d="M7.443 21.1l8.6 4.988V30L3.888 23V9l.125-.019 3.393 1.973.037.113V21.1"
      ></path>
      <path
        fill={colors[0]}
        d="M7.443 11.067L3.888 9l12.126-7 12.1 6.972-3.5 1.957-8.6-4.906-8.571 5.044"
      ></path>
      <path
        fill={colors[2]}
        d="M15.894 19.945l-.093-.1v-3.783l.093-.048.023-.093 3.247-1.894.1.022v3.9l-3.369 1.993"
      ></path>
      <path
        fill={colors[1]}
        d="M12.469 18.073v-4.052h.094l3.3 1.922.028.076v3.931l-3.425-1.872"
      ></path>
      <path
        fill={colors[0]}
        d="M15.838 12.027l-3.369 1.993 3.425 1.993 3.369-1.965-3.425-2.021"
      ></path>
      <path
        fill={colors[2]}
        d="M11.7 22.415l-.093-.1v-3.782l.093-.048.023-.093 3.248-1.892.1.022v3.9L11.7 22.415"
      ></path>
      <path
        fill={colors[1]}
        d="M8.276 20.544v-4.053h.094l3.3 1.922.028.076v3.931l-3.422-1.876"
      ></path>
      <path
        fill={colors[0]}
        d="M11.645 14.5l-3.369 1.991 3.424 1.994 3.37-1.965-3.425-2.02"
      ></path>
      <path
        fill={colors[2]}
        d="M20.386 22.509l-.093-.1v-3.783l.093-.048.023-.093 3.247-1.894.1.022v3.9l-3.369 1.993"
      ></path>
      <path
        fill={colors[1]}
        d="M16.961 20.637v-4.052h.094l3.3 1.922.028.076v3.931l-3.425-1.872"
      ></path>
      <path
        fill={colors[0]}
        d="M20.33 14.592l-3.369 1.993 3.425 1.993 3.369-1.965-3.425-2.021"
      ></path>
      <path
        fill={colors[2]}
        d="M16.193 24.98l-.093-.1V21.1l.093-.048.023-.093 3.247-1.894.1.022v3.9l-3.37 1.993"
      ></path>
      <path
        fill={colors[1]}
        d="M12.768 23.108v-4.052h.094l3.3 1.922.028.076v3.926l-3.425-1.872"
      ></path>
      <path
        fill={colors[0]}
        d="M16.137 17.062l-3.369 1.993 3.425 1.993 3.369-1.965-3.425-2.022"
      ></path>
      <path
        fill={colors[2]}
        d="M15.894 14.573l-.093-.1V10.69l.093-.048.023-.093 3.247-1.894.1.022v3.9l-3.369 1.993"
      ></path>
      <path
        fill={colors[1]}
        d="M12.469 12.7V8.649h.094l3.3 1.922.028.076v3.931L12.469 12.7"
      ></path>
      <path
        fill={colors[0]}
        d="M15.838 6.656l-3.369 1.993 3.425 1.993 3.369-1.965-3.425-2.021"
      ></path>
      <path
        fill={colors[2]}
        d="M11.7 17.044l-.093-.1v-3.783l.093-.048.023-.093 3.247-1.894.1.022v3.9l-3.37 1.996"
      ></path>
      <path
        fill={colors[1]}
        d="M8.276 15.172V11.12h.094l3.3 1.922.028.076v3.931l-3.422-1.877"
      ></path>
      <path
        fill={colors[0]}
        d="M11.645 9.126L8.276 11.12l3.424 1.993 3.369-1.965-3.424-2.022"
      ></path>
      <path
        fill={colors[2]}
        d="M20.386 17.137l-.093-.1v-3.782l.093-.048.023-.093 3.247-1.894.1.022v3.9l-3.369 1.993"
      ></path>
      <path
        fill={colors[1]}
        d="M16.961 15.266v-4.053h.094l3.3 1.922.028.076v3.931l-3.425-1.872"
      ></path>
      <path
        fill={colors[0]}
        d="M20.33 9.22l-3.369 1.993 3.425 1.993 3.369-1.965L20.33 9.22"
      ></path>
      <path
        fill={colors[2]}
        d="M16.193 19.608l-.093-.1v-3.783l.093-.048.023-.093 3.247-1.894.1.022v3.9l-3.369 1.993"
      ></path>
      <path
        fill={colors[1]}
        d="M12.768 17.736v-4.052h.094l3.3 1.922.028.076v3.931l-3.425-1.872"
      ></path>
      <path
        fill={colors[0]}
        d="M16.137 11.691l-3.369 1.993 3.425 1.993 3.369-1.965-3.425-2.022"
      ></path>
    </svg>
  );
};

export default Sequelize;
