let removeDuplicates nums =
  if Array.length nums <= 1 then
    Array.length nums
  else
    let ni = ref 0 in
    for i = 1 to (Array.length nums) - 1 do
      if nums.(!ni) <> nums.(i) then
        ni := !ni + 1;
        nums.(!ni) <- nums.(i)
    done;
    !ni + 1

let () =
  let testArray = [| 3; 3; 3; 4; 5; 6; 6; 7; 8; 9 |] in
  let reducedLength = removeDuplicates testArray in
  print_endline ("After removing duplicates: " ^ (string_of_int reducedLength));
  print_string "[ ";
  for i = 0 to reducedLength - 1 do
    print_int testArray.(i);
    print_string " "
  done;
  print_endline "]"
