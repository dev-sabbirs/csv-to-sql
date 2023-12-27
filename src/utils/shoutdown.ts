import { buildServer } from ".";

export const shoutDown = ({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) => {
  app.close();
};
