<?php

return [

    'version'    => rand(111,9999),

    // Define size of chunk uploaded by MB. E.g. integer 128 means chunk size will be 128MB.
    'chunk_size' => env('CHUNK_SIZE', '128'),
];
