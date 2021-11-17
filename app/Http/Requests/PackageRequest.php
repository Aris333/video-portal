<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PackageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->route()->uri == 'api/package/update')
          {
            return [
                'id' => 'required',
                'name' => 'required',
                'size' => 'required',
                'cost' => 'required',
                'duration' => 'required',
                'detail' => 'required'
            ];
          }else{
            return [
                'name' => 'required',
                'size' => 'required',
                'cost' => 'required',
                'duration' => 'required',
                'detail' => 'required'
            ];
          }
    }
}
