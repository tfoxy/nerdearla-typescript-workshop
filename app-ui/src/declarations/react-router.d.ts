declare module "react-router" {
  function useParams<Params extends string>(): ExtractRouteParams<
    Params,
    string
  >;
}

export {};
