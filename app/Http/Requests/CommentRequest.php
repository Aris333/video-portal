<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentRequest extends FormRequest
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
    {   if ($this->route()->uri == 'api/comment/update') {
        return [
            'id' => 'required',
            'comment' => 'required',
            'comment_type' => 'required',
            'video_time' => 'required',
            'file_id' => 'required',
            'user_id' => 'required'
        ];
    }else
    {
        return [
            'comment' => 'required',
            'comment_type' => 'required',
            'video_time' => 'required',
            'file_id' => 'required',
            'user_id' => 'required',
        ];
    }

    }
}
