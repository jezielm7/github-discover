export default interface Repo {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
  };
  description: string;
}