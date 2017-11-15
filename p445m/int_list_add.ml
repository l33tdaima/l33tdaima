let rec int_list_add lhs rhs =
    let len_lhs = List.length lhs in
    let len_rhs = List.length rhs in
    (* end condition *)
    match (len_lhs, len_rhs) with 
    | (0, 0) -> [0]
    | _ -> 
        let (hd_sum, res) = 
            if len_lhs > len_rhs then
                let r = int_list_add (List.tl lhs) rhs in
                (List.hd lhs + List.hd r, r)
            else if len_lhs < len_rhs then
                let r = int_list_add lhs (List.tl rhs) in
                (List.hd rhs + List.hd r, r)
            else
                let r = int_list_add (List.tl lhs) (List.tl rhs) in
                (List.hd lhs + List.hd rhs + List.hd r, r)
        in
        (hd_sum / 10) :: ((hd_sum mod 10) :: List.tl res)

open Printf
let () =
    List.iter (printf "%d " ) (int_list_add [] []);
    print_newline ();
    List.iter (printf "%d " ) (int_list_add [1] []);
    print_newline ();
    List.iter (printf "%d " ) (int_list_add [] [2]);
    print_newline ();
    List.iter (printf "%d " ) (int_list_add [1;2;3] [4;5;9]);
    print_newline ();
    List.iter (printf "%d " ) (int_list_add [1;5] [1;7;7]);
    print_newline ();
    List.iter (printf "%d " ) (int_list_add [1] [9;9;9]);
    print_newline ();
