#!/bin/bash

# List of problem IDs to keep
problem_ids_to_keep=('a39b8a0def15' 'a39b8a0def22' 'a394625deriv18'
'a2d77b8chainrule7' 'a394625deriv2' 'a39b8a0def26'
'aca1a7dderivativetangent4' 'a1cc0dcareas8'
'aca1a7dtangentline1' 'acf60f3DerivativeFunction8' 'a39b8a0def6'
'a1cc0dcareas10' 'a39b8a0def11' 'a2d77b8chainrule6'
'aca1a7dderivative3' 'a2d77b8chainrule11' 'a39b8a0def8'
'a39b8a0def19' 'a961302definite15' 'aca1a7dderivative2'
'a394625deriv7' 'acf60f3DerivativeFunction4' 'a39b8a0def9'
'acf60f3DerivativeFunction10' 'a961302definite9'
'a961302definite4' 'a961302definite14'
'acf60f3DerivativeFunction14' 'a2d77b8chainrule1' 'a39b8a0def3'
'a39b8a0def25' 'a394625deriv6' 'a394625deriv19'
'aca1a7dtangentline3' 'a394625deriv1' 'aca1a7dderivative4'
'a394625deriv20' 'acf60f3DerivativeFunction15'
'acf60f3DerivativeFunction12' 'a394625deriv10' 'a39b8a0def7'
'aca1a7dderivative10' 'a961302definite16' 'aca1a7dtangentline4'
'a39b8a0def23' 'a2d77b8chainrule9' 'acf60f3DerivativeFunction7'
'aca1a7dtangentline7' 'a1cc0dcareas2' 'a394625deriv5'
'a961302definite21' 'aca1a7dderivative12' 'a961302definite13'
'aca1a7dtangentline6' 'acf60f3DerivativeFunction6'
'a394625deriv15' 'aca1a7dderivativetangent1' 'a961302definite18'
'a961302definite20' 'a2d77b8chainrule2' 'a1cc0dcareas4'
'a961302definite11' 'a1cc0dcareas1' 'a39b8a0def21'
'a394625deriv9' 'a394625deriv4' 'a39b8a0def17' 'a39b8a0def2'
'aca1a7dtangentline2' 'a1cc0dcareas11' 'aca1a7dderivative5'
'a39b8a0def1' 'a39b8a0def5' 'a394625deriv12'
'acf60f3DerivativeFunction2' 'acf60f3DerivativeFunction5'
'a1cc0dcareas3' 'a39b8a0def18' 'a961302definite17'
'a39b8a0def4' 'aca1a7dderivativetangent3' 'aca1a7dvelocity1'
'a394625deriv11' 'a394625deriv23' 'a2d77b8chainrule8'
'acf60f3DerivativeFunction1' 'a961302definite19'
'a394625deriv21' 'a2d77b8chainrule10' 'a394625deriv16'
'aca1a7dderivative9' 'a39b8a0def14' 'aca1a7dtangentline8'
'aca1a7dderivativetangent2' 'aca1a7dderivative7' 'a39b8a0def16'
'a39b8a0def24' 'a2d77b8chainrule5' 'aca1a7dderivative1'
'acf60f3DerivativeFunction9' 'a394625deriv8' 'a394625deriv22'
'a961302definite12' 'a2d77b8chainrule13' 'aca1a7dderivative8'
'a39b8a0def13' 'a2d77b8chainrule4' 'aca1a7dderivative11'
'a1cc0dcareas6' 'aca1a7dderivative6' 'a394625deriv14'
'a394625deriv25' 'a39b8a0def10' 'a1cc0dcareas7'
'a394625deriv17' 'a394625deriv3' 'a2d77b8chainrule15'
'a2d77b8chainrule3' 'a394625deriv13' 'a394625deriv24'
'acf60f3DerivativeFunction13' 'a961302definite10'
'a2d77b8chainrule12' 'acf60f3DerivativeFunction3'
'aca1a7dtangentline5' 'a39b8a0def12' 'a961302definite3'
'a2d77b8chainrule14' 'acf60f3DerivativeFunction11'
'a39b8a0def20' 'a1cc0dcareas9')

# Loop through all directories in content-pool
for dir in */ ; do
    dir=${dir%/}  # Remove trailing slash
    if [[ ! " ${problem_ids_to_keep[@]} " =~ " ${dir} " ]]; then
        echo "Removing ${dir}"
        rm -rf "$dir"
    fi
done

