(** 
 * @param {string} S
 * @param {number} K
 * @return {string}
 *)
let license_key_formatting s k =
  (* convert string to char list reversely *)
  let rec to_list_rev i lst =
    if i >= (String.length s) then lst
    else 
      let c = Char.uppercase s.[i] in
      to_list_rev (i + 1) (if c = '-' then lst else c :: lst)
  in
  let rlist = to_list_rev 0 [] in
  (* format char list to string *)
  let rec to_format lst i = match lst with
    | [] -> ""
    | hd :: tl ->
      if (i mod k) = 0 && i < List.length rlist then
        (to_format tl (i + 1)) ^ "-" ^ (String.make 1 hd)
      else
        (to_format tl (i + 1)) ^ (String.make 1 hd)
  in
  to_format rlist 1

(* TEST *)
let () =
  let tests = [
    ("5F3Z-2e-9-w", 4);
    ("2-5g-3-J", 2);
    ("--a-a-a-a--", 2);
  ] in
  List.iter (fun t ->
    print_endline @@ "Formatted license key " ^ (fst t) ^ " -> " ^
                     (license_key_formatting (fst t) (snd t))
  ) tests;
