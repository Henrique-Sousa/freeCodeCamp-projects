section=" "
file=" "

csplit ${file} /${section}/ {*}

for i in $(ls xx*); do
    sed -i '1i// =========================================================================================' $i
    new_name=$(grep "${section}" $i | cut -d: -f2 | sed 's/^ //' | tr '[:upper:]' '[:lower:]' | tr " " "-")
    mv $i ${new_name}.js
done


