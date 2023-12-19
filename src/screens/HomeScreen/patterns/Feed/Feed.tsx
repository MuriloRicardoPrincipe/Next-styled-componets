import React, { Children } from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Images/image";

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  return (
    <Box>
      <Text>Feed base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Image
        styleSheet={{
          width: "128px",
          height: "128px",
          borderRadius: "100%",
        }}
        src="https://github.com/MuriloRicardoPrincipe.png"
        alt="Imagem de perfil do Mario Souto"
      />
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>Feed Header</Text>
    </Box>
  );
};

Feed.Post = () => {
  return (
    <Box>
      <Text>Feed post</Text>
    </Box>
  );
};
