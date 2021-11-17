<?php

namespace App\Http\Requests\Share;

use Illuminate\Foundation\Http\FormRequest;

class AuthenticateShareProjectRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'password' => 'required|string',
        ];
    }
}
